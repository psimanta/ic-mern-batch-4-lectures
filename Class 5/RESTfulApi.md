# RESTful API Design Principles

## What is REST?

REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server protocol, almost always HTTP.

## Key Principles

### 1. Client-Server Architecture

- Separation of concerns
- Independent evolution of client and server
- Improved scalability

### 2. Statelessness

- Each request contains all necessary information
- No client context stored on server
- Any session state is kept on the client

### 3. Cacheability

- Responses must define themselves as cacheable or not
- Improves scalability and performance
- Reduces server load

### 4. Uniform Interface

- Resource identification in requests
- Resource manipulation through representations
- Self-descriptive messages
- Hypermedia as the engine of application state (HATEOAS)

### 5. Layered System

- Client can't tell if connected directly to server
- Intermediate servers can improve scalability
- Load balancing and shared caches

## HTTP Methods in REST

### GET

- Retrieve a resource
- Safe and idempotent
- No side effects

```http
GET /api/users/123
```

### POST

- Create a new resource
- Not idempotent
- Creates new resource each time

```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### PUT

- Update/Replace a resource
- Idempotent
- Complete resource update

```http
PUT /api/users/123
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### PATCH

- Partial resource update
- Not necessarily idempotent
- Updates specific fields

```http
PATCH /api/users/123
Content-Type: application/json

{
  "email": "newemail@example.com"
}
```

### DELETE

- Remove a resource
- Idempotent
- Returns success even if resource doesn't exist

```http
DELETE /api/users/123
```

## HTTP Status Codes

### Success Codes (2xx)

- 200: OK (Success)
- 201: Created (Resource created)
- 204: No Content (Success, no response body)

### Client Error Codes (4xx)

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 409: Conflict
- 422: Unprocessable Entity

### Server Error Codes (5xx)

- 500: Internal Server Error
- 502: Bad Gateway
- 503: Service Unavailable

## Resource Naming Conventions

### Best Practices

1. **Use Nouns for Resources**

   ```
   Good: /users, /products, /orders
   Bad: /getUsers, /createProduct
   ```

2. **Use Plural Nouns**

   ```
   Good: /users/123
   Bad: /user/123
   ```

3. **Use Hierarchy for Related Resources**

   ```
   /users/123/orders
   /orders/456/items
   ```

4. **Use Query Parameters for Filtering**

   ```
   /products?category=electronics
   /users?role=admin&status=active
   ```

5. **Version Your API**
   ```
   /v1/users
   /v2/products
   ```

## Request/Response Formats

### Request Format

```http
POST /api/v1/users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user"
}
```

### Response Format

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/v1/users/123

{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user",
  "created_at": "2024-01-20T10:00:00Z"
}
```
