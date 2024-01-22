from flask import Flask
from flask_cors import CORS
import pandas as pd
from process import get_data

app = Flask(__name__, static_folder='../front/build', static_url_path='/')
CORS(app)

@app.route("/")
def get_website():
    return app.send_static_file('index.html')


@app.route("/dataframe")
def get_dataframe():
    df = get_data()
    return {'html': df.to_html()}


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)