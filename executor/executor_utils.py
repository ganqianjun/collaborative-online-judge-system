import docker
import os
import shutil
import uuid

from docker.errors import *

# load image
DOCKER_IMAGE_NAME = 'ganqianjun/coj'

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
