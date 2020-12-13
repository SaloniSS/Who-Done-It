from flask import Flask
import requests
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

detectives = [
        {
            "name": "Watson",
            "image": "https://res.cloudinary.com/utd-hdt/image/upload/v1607821008/watson_ezjtua.jpg",
            "score": 0
        },
        {
            "name": "Nancy Drew",
            "image": "https://res.cloudinary.com/utd-hdt/image/upload/v1607821008/drew_w2zxmp.png",
            "score": 0
        },
        {
            "name": "Detective Clouseau",
            "image": "https://res.cloudinary.com/utd-hdt/image/upload/v1607821007/clouseau_tuwjpt.jpg",
            "score": 0
        },
        {
            "name": "Velma Dinkley",
            "image": "https://res.cloudinary.com/utd-hdt/image/upload/v1607821008/velma_rmlqm3.webp",
            "score": 0
        }
    ]

def get_scores(user_image, detective_image):
    r = requests.post(
        "https://api.deepai.org/api/image-similarity",
        data={
            'image1': 'https://res.cloudinary.com/utd-hdt/image/upload/' + user_image,
            'image2': detective_image,
        },
        headers={'api-key': os.getenv("DEEPAI_API")}
    )
    return r.json()['output']['distance']

def get_most_similar(user_image):
    global detectives
    for detective in detectives:
        score = get_scores(user_image, detective['image'])
        detective['score'] = score

    detectives = sorted(detectives, key=lambda i: i['score'])
    most_similar = detectives[0]
    print(most_similar)
    return most_similar

@app.route('/most-similar/<tag>/<name>')
def print_most_similar(tag, name):
    most_similar = get_most_similar(tag +'/' + name)
    return most_similar['name']
