# Playing Nice with Django and React

### Code Samples

This repository contains the Django + React practice project as demonstrated during the presentation "Playing Nice with Django and React" by Jacob Cook.

To get started:

```bash
# Set up virtualenv
virtualenv -p python3 env
source env/bin/activate

# Install requirements
pip install -r requirements.txt
yarn install

# Create database
python manage.py migrate
python manage.py loaddata fixtures.json

# Generate assets
yarn run webpack

# Run server
python manage.py runserver
```


### Note

This is an extremely simple (and silly) example. We can add more pages and components, as well as more logic based on the Django side of things, using the same model.
