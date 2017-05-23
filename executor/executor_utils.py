import docker
import os
import shutil
import uuid

from docker.errors import *

DOCKER_IMAGE_NAME = 'ganqianjun/coj'
# get current directory as the parent directory
CURRENT_DIR = os.path.dirname(os.path.realpath(__file__))
TMP_BUILD_DIR = '%s/tmp' % CURRENT_DIR

SOURCE_FILE_NAMES = {
    'java' : 'Example.java',
    'python' : 'Example.py',
    'c++': 'Example.cpp'
}

BINARY_NAMES = {
    'java' : 'Example',
    'python' : 'Example.py',
    'c++' : 'a.out'
}

BUILD_COMMANDS = {
    'java' : 'javac',
    'python' : 'python',
    'c++' : 'g++'
}

EXECUTE_COMMANDS = {
    'java' : 'java ',
    'python' : 'python ',
    'c++': './'
}

# load image
client = docker.from_env()

def load_image():
    try:
        # first to find the image locally
        client.images.get(DOCKER_IMAGE_NAME)
    except ImageNotFound:
        # if image is not found locally, then pull it from docker hub
        print 'executor_utils.py - image not found locally and is pulling'
        client.images.pull(DOCKER_IMAGE_NAME)
    except APIError:
        print 'executor_utils.py - image could not found'
        return
    print 'executor_utils.py - loaded image [%s]' % DOCKER_IMAGE_NAME

def build_and_run(code, language):
    result = {
        'build': None,
        'run': None,
        'error': None
    }

    source_file_parent_dir_name = uuid.uuid4()
    source_file_host_dir = '%s/%s' % (TMP_BUILD_DIR, source_file_parent_dir_name)
    source_file_guest_dir = '/test/%s' % (source_file_parent_dir_name)

    make_dir(source_file_host_dir)

    with open('%s/%s' % (source_file_host_dir, SOURCE_FILE_NAMES[language]), 'w') as source_file:
        source_file.write(code)

    try:
        client.containers.run(
            image=DOCKER_IMAGE_NAME,
            command='%s %s' % (BUILD_COMMANDS[language], SOURCE_FILE_NAMES[language]),
            volumes={source_file_host_dir: {'bind': source_file_guest_dir, 'mode': 'rw'}},
            working_dir=source_file_guest_dir)
        print 'executor_utils.py - source built'
        result['build'] = 'Built Succefully'
    except ContainerError as e:
        print 'Build failed'
        result['build'] = e.stderr
        shutil.rmtree(source_file_host_dir)
        return result

    try:
        log = client.containers.run(
            image=DOCKER_IMAGE_NAME,
            command='%s%s' % (EXECUTE_COMMANDS[language], BINARY_NAMES[language]),
            volumes={source_file_host_dir: {'bind': source_file_guest_dir, 'mode': 'rw'}},
            working_dir=source_file_guest_dir)
        print 'executor_utils.py - executed'
        result['run'] = log
    except ContainerError as e:
        print 'executor_utils.py - execution failed'
        result['run'] = e.stderr
        shutil.rmtree(source_file_host_dir)
        return result

    shutil.rmtree(source_file_host_dir)
    return result

def make_dir(dir):
    try:
        os.makedirs(dir)
        print 'executor_utils.py - tmp build directory [%s] created' % dir
    except OSError:
        print 'executor_utils.py - tmp build directory [%s] existed' % dir
