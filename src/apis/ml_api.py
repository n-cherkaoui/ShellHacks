from flask import Flask
import ml_model

app = Flask(__name__)

def stock_data():
    return ml_model.new_w

@app.route('/api/call-python-method', methods=['GET'])
def call_method():
    result = stock_data()
    return {"result": result}

if __name__ == '__main__':
    app.run()
