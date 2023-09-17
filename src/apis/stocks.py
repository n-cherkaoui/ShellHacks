from fastapi import FastAPI
import json

app = FastAPI()

# Load data from a JSON file (replace 'your_data.json' with your actual JSON file)
<<<<<<< HEAD
with open('your_data.json', 'r') as json_file:
=======
with open('hardcode.json', 'r') as json_file:
>>>>>>> 39837517 (api update)
    data = json.load(json_file)

@app.get("/stocks")
async def read_stocks():
    return data
