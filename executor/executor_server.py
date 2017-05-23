import executor_utils as eu
import json

from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/builder', methods=['POST'])
def builder():
    data = json.loads(request.data)
    if 'code' not in data or 'language' not in data:
        return 'Executor - please provide user codes and language'
    code = data['code']
    language = data['language']
    print 'executor.py - get called with code %s in %s' % (code, language)
    result = eu.build_and_run(code, language)
    return jsonify(result)

if __name__ == '__main__':
    eu.load_image()
    app.run(debug=True)
