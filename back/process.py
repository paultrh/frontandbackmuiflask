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