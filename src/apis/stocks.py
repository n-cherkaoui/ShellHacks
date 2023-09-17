from fastapi import FastAPI
import json

app = FastAPI()

# Load data from a JSON file (replace 'your_data.json' with your actual JSON file)
with open('tickers.json', 'r') as json_file:
    data = json.load(json_file)

@app.get("/stocks")
async def read_stocks():
    return data
