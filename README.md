# Form Builder Assignment

## Overview

A full-stack Form Builder application that allows users to create dynamic forms, preview them, and submit responses.

## Features

### Admin Features

* Create custom forms
* Add multiple field types:

  * Text
  * Email
  * Number
  * Date
  * Textarea
  * Dropdown
  * Radio Buttons
  * Checkboxes
* Preview forms before submission
* View all created forms
* Delete forms

### User Features

* Open a form
* Fill dynamic fields
* Submit responses

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

assignment/
├── frontend/
├── backend/
└── README.md

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## API Endpoints

### Forms

* GET /api/forms
* GET /api/forms/:id
* POST /api/forms
* DELETE /api/forms/:id

### Submissions

* POST /api/submissions

## Author

Saloni Vijay
