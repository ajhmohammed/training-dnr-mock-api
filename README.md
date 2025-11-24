# Person Search Mock API

A simple Express.js API server that provides a search endpoint for querying person records by NIC (National Identity Card) and name.

## Features

- Search for people using both NIC and name parameters
- CORS enabled for cross-origin requests
- Returns detailed person information including address and demographics
- Input validation with proper error handling

## Prerequisites

- Node.js (v12 or higher)
- npm or yarn

## Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install express cors
```

## Usage

### Starting the Server

```bash
node index.js
```

The server will start on `http://localhost:5858`

### API Endpoint

#### Search for a Person

**Endpoint:** `GET /search`

**Query Parameters:**
- `nic` (required) - National Identity Card number
- `name` (required) - Any part of the person's name (first, middle, last, common, or full name)

**Example Request:**
```bash
curl "http://localhost:5858/search?nic=A238191&name=Rasheed"
```

**Success Response (200):**
```json
{
  "data": {
    "nic": "A238191",
    "name_first": "Ibrahim",
    "name_middle": "Rasheed",
    "name_last": "Latheef",
    "name_common": "Rasheed",
    "name_full": "Ibrahim Rasheed Latheef",
    "sex": "m",
    "date_of_birth": "1990-08-15T00:00:00",
    "address_home_name": "Fehimagu",
    "address_island_name": "Hithadhoo",
    "address_atoll_name": "Seenu"
  }
}
```

**Error Responses:**

- **400 Bad Request** - Missing required parameters
```json
{
  "error": "Both 'nic' and 'name' query parameters are required."
}
```

- **404 Not Found** - No matching record
```json
{
  "error": "No matching record found."
}
```

## Sample Data

The API includes three sample person records:

| NIC | Name | Location |
|-----|------|----------|
| A238191 | Ibrahim Rasheed Latheef | Hithadhoo, Seenu |
| A187450 | Fathimath Layaal Hassan | Thinadhoo, Gaafu Dhaalu |
| A402981 | Ahmed Zayan Mohamed | Kulhudhuffushi, Haa Dhaalu |

## Security Notes

- Both NIC and name are required for search to prevent unauthorized data mining
- Case-insensitive matching for user convenience
- This is a mock API for development/testing purposes only
- Do not use in production with real personal data without proper security measures

## Configuration

You can modify the port by changing the `PORT` constant:

```javascript
const PORT = 5858; // Change to your preferred port
```

## License

This is a demonstration project for educational purposes.