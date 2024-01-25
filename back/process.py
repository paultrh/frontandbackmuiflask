from ast import List
import pandas as pd


def get_data():
    # creating a data frame
    data = {
        "fruit": ["apple", "banana", "grapes", "orange"],
        "colour": ["red", "yellow", "green", "orange"],
        "quantity": [2, 1, 1, 3],
        "price": [80, 40, 100, 75]
    }
    
    df = pd.DataFrame(data)
    
    return df


import json

# Function to save JSON data to a file
def save_json_to_file(data, filename):
    try:
        with open(filename, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"JSON data saved to {filename}")
    except Exception as e:
        print(f"Error while saving JSON data to {filename}: {e}")

# Function to read JSON data from a file
def read_json_from_file(filename):
    try:
        with open(filename, 'r') as file:
            data = json.load(file)
        return data
    except Exception as e:
        print(f"Error while reading JSON data from {filename}: {e}")
        return None
 

def get_chart_data(df):
    cols = df.columns.to_list()
    chart = {'labels': df.index.tolist(), 'datasets': []}
    for col in df.columns:
        chart['datasets'].append({
            'label': col,
            'data': df[col].values.tolist()
        })
    return {'chart': chart, 'cols': cols, 'html': df.to_html()}

def get_elements(type):
    """
    function to record all the chart elements by chart type
    this is the function to edit to add a new chart type
    """
    options = {}

    if type == 'stackedBar':
        options['scales'] = {
                    'xAxes': [
                        {'stacked': 'true'}
                    ], 
                    'yAxes': [
                        {'stacked': 'true'}
                    ]
                }

    if type == 'bar':
        options['scales'] = {
                    'xAxes': [
                        {
                            'ticks': {
                                'beginAtZero': 'true'
                            }
                        }
                    ], 
                    'yAxes': [
                        {
                            'ticks': {
                                'beginAtZero': 'true'
                            }
                        }
                    ]
                }

    if type == 'groupedBar':
        options['scales'] = {
                    'xAxes': [
                        {
                            'ticks': {
                                'beginAtZero': 'true'
                            }
                        }
                    ], 
                    'yAxes': [
                        {
                            'ticks': {
                                'beginAtZero': 'true'
                            }
                        }
                    ]
                }

    if type == 'horizontalBar':
        options['scales'] = {
                    'xAxes': [
                        {
                            'ticks': {
                                'beginAtZero': 'true'
                            }
                        }
                    ], 
                    'yAxes': [
                        {
                            'ticks': {
                                'beginAtZero': 'true'
                            }
                        }
                    ]
                }

    if type == 'stackedHorizontalBar':
        options['scales'] = {
                    'xAxes': [
                        {'stacked': 'true'}
                    ], 
                    'yAxes': [
                        {'stacked': 'true'}
                    ]
                }

    if type == 'doughnut':
        options['type'] = 'doughnut'

    if type == 'polarArea':
        options['type'] = 'polarArea'

    if type == 'radar':
        options['type'] = 'radar'

    return options