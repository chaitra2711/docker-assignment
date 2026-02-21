This project demonstrates a multi-container application using Docker and Docker Compose.

The application consists of:
- Backend: Python Flask application
- Frontend: Node.js application
- Communication between containers using Docker network

How It Works

- Frontend sends form data to backend.
- Backend processes the request.
- Docker Compose creates a network for container communication.
- Services communicate using service name (e.g., backend:5000).
