import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from datetime import datetime
import pandas as pd

engine = create_engine("postgres://postgres:MomentoMori314?@localhost:5432/CO_TAX")

# http://localhost:5000/static/index.html

# Create our session (link) from Python to the DB
session = Session(engine)

from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return ''

#Meant to replace 
# var mj_taxes_2018 = "data/ALL_MJ_Tax_Data.csv"
@app.route("/taxes")
def taxes():
    return pd.read_sql('SELECT * FROM co_tax', engine).to_json(orient='records')
    
if __name__ == '__main__':
    app.run(debug=True)