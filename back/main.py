from flask import Flask
from flask_cors import CORS
import pandas as pd
from flask import request
from process import get_data, get_elements

app = Flask(__name__, static_folder='../front/build', static_url_path='/')
CORS(app)

@app.route("/")
def get_website():
    return app.send_static_file('index.html')


@app.route("/dataframe")
def get_dataframe():
    df = get_data()
    return {'html': df.to_html()}

@app.route("/chart/")
@app.route("/chart/<index>")
def get_dataframe_chart(index=''):
    df = get_data()

    cols = df.columns.to_list()
    type = request.args.get('type')

    if index:
        df = df.set_index(index.split(','))
    chart = {'labels': df.index.tolist(), 'datasets': []}
    for col in df.columns:
        chart['datasets'].append({
            'label': col,
            'data': df[col].values.tolist()
        })

    print(chart)
    
    return {'html': df.to_html(), 'chart': chart, 'cols': cols, 'options': get_elements(type) }



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)