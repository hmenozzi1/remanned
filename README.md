README

##Side notes
Api updated to handle DRF response format

# ReManned® MQ3™ Hub (Character Arc App Prototype)

A full-stack web application built as part of the **Character Arc™ Capstone Project**.

The ReManned® MQ3™ Hub is a journaling and growth-tracking platform where users can:

- Log daily reflections and self-growth scores  
- Track progress across 12-week MQ3™ cycles  
- Review goals, history, and journaling data  
- Visualize completion and adaptation across **SQ** (Spiritual Quotient) and **AQ** (Adaptability Quotient) phases  

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Tech Stack](#tech-stack)  
3. [Architecture](#architecture)  
4. [Prerequisites](#prerequisites)  
5. [Installation](#installation)  
   - [Clone the Repository](#clone-the-repository)  
   - [Backend Setup (Django)](#backend-setup-django)  
   - [Frontend Setup (Vite + React)](#frontend-setup-vite--react)  
6. [Environment Configuration](#environment-configuration)  
7. [Running the Application](#running-the-application)  
8. [Creating a Test User](#creating-a-test-user)  
9. [Usage](#usage)  


---

## Project Overview

**ReManned® MQ3™ Hub** is a prototype for the Character Arc™ platform.

**Key capabilities (current prototype):**

-  Welcome screen with branded MQ3™ visual (Spiritual arc, Life–Leadership–Legacy Venn)  
-  User login (test user, no password validation yet)  
-  Protected shell with a consistent sidebar and “End Session” flow  
-  Core user views:
  - **Dashboard** – MQ3™ cycle overview, SQ & AQ progress summaries  
  - **Goals** – SQ (Phase I) and AQ (Phase II) breakdown with expandable details  
  - **History** – Prior cycles, progress comparison, domain performance, lessons, strengths  
  - **Journal** – Daily reflection entry UI (currently static / not persisted)  

This is a **development / prototype build**: data is largely static on the frontend, but the backend API is implemented using Django REST Framework and is ready for further integration.

---

## Tech Stack

### Frontend

- [Vite](https://vitejs.dev/) (bundler)
- [React](https://react.dev/)
- JavaScript (ESNext)
- HTML5 + CSS3

### Backend

- [Django](https://www.djangoproject.com/)
- [Django REST Framework (DRF)](https://www.django-rest-framework.org/)
- `django-cors-headers` (CORS handling)

### Database

- Prototype uses **SQLite** via `db.sqlite3`  
- Designed to support **PostgreSQL** in future deployments

### Development Tooling

- Node.js & npm
- Python 3.8+
- Git & GitHub

---

## ARCHITECTURE

Repository layout (simplified):

```text
.
├── backend/              # Django project (API, models, migrations)
│   ├── backend/          # Django settings, URLs, WSGI/ASGI
│   ├── api/              # App with models, serializers, views
│   ├── db.sqlite3        # Dev database
│   └── manage.py
└── remanned/             # Frontend (Vite + React)
    ├── index.html
    ├── package.json
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── components/   # Reusable UI components
        └── Pages/        # Welcome, Login, Dashboard, Goals, History, Journal


```
---

## PREREQUISITES

Make sure you have the following installed:

- Python: 3.8 or later
- Node.js: 16 or later
- npm: comes with Node.js
- Git

Check versions:
python --version
node --version
npm --version

---

## INSTALLATION
Clone the repository: https://github.com/hmenozzi1/remanned.git

### Backend Setup
cd remanned/backend

**Create virtual environment (bash)**
python -m venv venv

**Activate virtual environment**:
source venv/Scripts/activate

**Install dependencies:**
pip install django djangorestframework django-cors-headers

**Apply migrations**:
python manage.py migrate

**Create test user**:
python manage.py shell

**In python shell**:
from api.models import User
User.objects.create(name="Test User", email="test@example.com") 

** hit enter, then exit()**/

exit()

**Verify user was created**:
User.objects.all().values('user_id', 'name', 'email')

**You should see: You should see**:
<QuerySet [{'user_id': 1, 'name': 'Test User', 'email': 'test@example.com'}]>
then type exit()

### Frontend Setup (bash)
cd remanned

npm install

npm install axios

---

### ENVIRONMENT CONFIG
Create .env file in remanned/ directory:
envVITE_APP_API_URL=http://localhost:8000/api

---

### RUNNING THE APPLICATION
**Start backend** (Run the following code in terminal--bash): 

cd remanned/backend

source venv/Scripts/activate (activate venv if not already active) 

python manage.py runserver

Backend available at: http://127.0.0.1:8000/

**Start frontend (in a seperate terminal)**: 
cd remanned
npm run dev -- --host 127.0.0.1 --port 3000 **(port 5173 throwing error. Feel free to use an available port)**

## The app currently uses a hash router, so the main entry points will look like:

Welcome: http://127.0.0.1:3000/

Login: http://127.0.0.1:3000/#/login

Create test user (Prerequisite above)


Sign-in with the test user: test@example.com / (any password)

