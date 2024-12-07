# Map-O Backend

Map-O Backend API provides the logic for managing process maps. This is the server-side component that handles requests related to the creation, viewing, updating, and deletion of process maps.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Backend Routes](#backend-routes)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Future Improvements](#future-improvements)

## Project Overview

Map-O Backend is a RESTful API that provides endpoints for managing process maps used in business process management. This backend is designed to work in conjunction with the frontend to create, view, update, and delete process maps in a seamless manner.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for storing process map data
- **Mongoose**: ODM (Object Document Mapper) for MongoDB
- **Jest**: Testing framework

## Backend Routes

The following routes are available in the backend API:

| Endpoint          | Method | Description                                                                 |
| ----------------- | ------ | --------------------------------------------------------------------------- |
| `/process`        | GET    | Fetches all process maps.                                                   |
| `/process/:id`    | GET    | Fetches a specific process map by its ID.                                   |
| `/process`        | POST   | Creates a new process map.                                                  |
| `/process/:id`    | PUT    | Updates an existing process map by its ID.                                  |
| `/process/:id`    | DELETE | Deletes a specific process map by its ID.                                   |

### Example Request:

1. **Create a Process Map:**

   - **Endpoint**: `POST /process`
   - **Request Body**:
     ```json
     {
       "processName": "Order Fulfillment",
       "orgUnit": "Sales",
       "processOwner": "John Doe",
       "contactDetails": "johndoe@example.com",
       "steps": [
         {
           "order": 1,
           "stakeholder": "Sales Representative",
           "action": "Take Order",
           "pass_to": "Inventory",
           "purpose": "Create a new order",
           "channel": "Email",
           "frequency": "Daily",
           "tool": "CRM"
         },
         {
           "order": 2,
           "stakeholder": "Inventory",
           "action": "Process Order",
           "pass_to": "Shipping",
           "purpose": "Check inventory and ship",
           "channel": "Email",
           "frequency": "As Needed",
           "tool": "Inventory Management System"
         }
       ]
     }
     ```

2. **Update a Process Map:**

   - **Endpoint**: `PUT /process/:id`
   - **Request Body**: (Similar to the POST body, but with updated fields)

3. **Delete a Process Map:**

   - **Endpoint**: `DELETE /process/:id`

## Setup

To get the backend up and running, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/NaveenMuralidharan/Map-O_backend.git
   ```
2. Install dependencies:
   ```bash
   cd Map-O_backend
   npm install
   ````
3. Set up environment variables:
Create a .env file in the root directory.
Add your MongoDB URI and any other necessary environment variables. Example:
```bash
    MONGO_URI=mongodb://localhost:27017/map_o
    PORT=5000
```
4. Start the server:
```bash
    npm start
```
5. The server will be running at http://localhost:5000.

## Usage

- **Homepage**: To view all process maps, navigate to `/process`.
- **View a Process Map**: To view details of a specific process map, use `/process/:id`.
- **Create a Process Map**: Use the `POST /process` route with the required JSON body.
- **Update a Process Map**: Use the `PUT /process/:id` route to update a specific process map by its ID.
- **Delete a Process Map**: Use the `DELETE /process/:id` route to delete a specific process map.

## Contributing

We welcome contributions to improve the Map-O Backend API. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (e.g., `git checkout -b feature-name`).
3. Make your changes and commit them (e.g., `git commit -am 'Add new feature'`).
4. Push to the branch (e.g., `git push origin feature-name`).
5. Open a pull request.

### Code Style

- Ensure your code adheres to the coding style conventions used in this project.
- Write clear, concise commit messages.

### Testing

To run tests, use the following command:

```bash
npm test
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact:

- **Author**: Naveen Muralidharan
- **Email**: naveenspec@gmail.com (replace with actual email)

## Future Improvements

- **Add Authentication**: Implement JWT-based authentication for securing the API.
- **Rate Limiting**: Add rate-limiting to prevent abuse of the API.
- **Swagger Documentation**: Integrate Swagger for automatic API documentation.
- **Add Unit Tests for Routes**: Ensure all endpoints have proper unit tests and coverage.
- **Improve Error Handling**: Enhance error handling and return more detailed error messages.
   
    
