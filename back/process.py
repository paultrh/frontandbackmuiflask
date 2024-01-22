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
 