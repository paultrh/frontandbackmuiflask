# projetToto

# SETUP

## BACK

cd back
python3.8 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

## FRONT

cd front
npm install

# Developing

## BACK
python main.py
now can be accessed  from http://0.0.0.0:5000/

## FRONT
npm start
now can be accessed  from http://0.0.0.0:3000/

# Production

Package front into back

cd front
npm run build

now front can be accessed from http://0.0.0.0:5000/