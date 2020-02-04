# import dependancies
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from datetime import datetime
import pandas as pd

# initialize database
password = 'Your Postgres Password Here' # Set up your database your local password
engine = create_engine("postgres://postgres:{password}?@localhost:5432/CO_TAX")

# Create our session (link) from Python to the DB
session = Session(engine)

from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return ''

# Query database to pull tax data. Replaces 
# var mj_taxes_2018 = "data/ALL_MJ_Tax_Data.csv"
@app.route("/taxes")
def taxes():
    return pd.read_sql('SELECT * FROM co_tax', engine).to_json(orient='records')
    
if __name__ == '__main__':
    app.run(debug=True)