# 📚 School API

A simple RESTful API built with Node.js to manage schools and list them based on geographical proximity using latitude and longitude.

## 🚀 Features

- Add a new school with name, address, latitude, and longitude
- List all schools sorted by distance from a given location
- Uses Haversine formula to calculate distances between coordinates

## 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL (or any SQL database with the appropriate query support)
- Nodemon (for development)

## 📁 Project Structure

```markdown


.
├── app.js               # Entry point
├── controllers          # Route logic (e.g., schoolController.js)
├── models               # Database connection or model logic
├── routes               # Express routes (e.g., schoolRoutes.js)
├── package.json         # Project metadata and dependencies

````

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Marlz74/school_api.git
cd school_api
````

2. Install dependencies:

```bash
npm install
```

3. Start the server in development mode:

```bash
npm run dev
```

> Server typically runs on `http://localhost:3000`. You can confirm this in `app.js`.

## 🧪 API Endpoints

### ➕ Add School

**POST** `/addSchool`

**Body Parameters (JSON)**:

```json
{
  "name": "Greenfield Academy",
  "address": "123 Main Street",
  "latitude": 5.6037,
  "longitude": -0.1870
}
```

### 📍 List Schools by Location

**GET** `/listSchools?latitude=5.6037&longitude=-0.1870`

**Query Parameters**:

- `latitude` — (required) User's current latitude
- `longitude` — (required) User's current longitude

Returns a list of schools sorted by distance.

## 🧪 Postman

Use the provided [Postman collection](./School API.postman_collection.json) to test the API.

Make sure to set the environment variable `base_url` to your server's base URL (e.g., `https://schoolapi.kreater.africa`).

## 👨‍💻 Author 

- **Your Name** — [@SD](https://github.com/Marlz74)

## 📝 License

This project is licensed under the MIT License.
