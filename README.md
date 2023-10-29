# Project Title

Accodal Technical Assessment

## Getting Started

### Dependencies

- Node v18.18.2
- NPM v8.13.2

### Installing

- Setup MongoDB
  - Download and install MongoDB version 7.0.2 ( https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.2-signed.msi )
  - Select Setup Type to "Complete"
  - Checked "Install MongoDB as a Service", select "Run service as Network Service user" then click "Next" button
  - Checked "Install MongoDB Compass", then click "Next" and then "Install"

### Executing program

- Clone Repo

```
git clone https://github.com/davecar21/accodal-restful-api.git
```

- Install package

```
npm i
```

- Run script

```
npm start
```

## Usage

### Endpoints

The API provides the following endpoints:

- `POST /items`: Create a new item.
- `GET /items`: Retrieve a list of all items.
- `GET /items/{id}`: Retrieve a single item by ID.
- `PUT /items/{id}`: Update an existing item.
- `DELETE /items/{id}`: Delete an item by ID.

### Sample request

- Create a new item.:
  POST http://localhost:3100/items/

  ```
  {
    "name": "Product 1",
    "description": "Description 1",
    "price": "29.99"
  }
  ```

- Retrieve a list of all items.:
  GET http://localhost:3100/items/

- Retrieve a single item by ID.:
  GET http://localhost:3100/items/{id}

- Update an existing item.:
  PUT http://localhost:3100/items/{id}

  ```
  {
    "name": "Product update 1",
    "description": "Description update 1",
    "price": "100.20"
  }
  ```

- Delete an item by ID.:
  DELETE http://localhost:3100/items/{id}

## Authors

Contributor name and contact info

Davecar Grave
davecargrave@gmail.com
[https://www.linkedin.com/in/davecargrave/](https://www.linkedin.com/in/davecargrave/)

## TODO

- documentation of Api
- Secure the API endpoints and document how to use them.
- Ensure error handling and validation in the API.
