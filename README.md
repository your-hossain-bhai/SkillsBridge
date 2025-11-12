# SkillBridge

SkillBridge is a MERN stack application designed to connect users with job opportunities and educational resources. The platform provides personalized career advice using AI, helping users to enhance their skills and find suitable job openings.

## Features

- **User Authentication**: Secure login and registration using JWT and bcrypt.
- **Job Listings**: Browse and apply for job opportunities.
- **Courses and Resources**: Access educational materials to improve skills.
- **AI Career Advice**: Get personalized career suggestions using the OpenAI API.
- **Responsive Design**: A clean and modern UI built with React and Tailwind CSS.

## Project Structure

```
skillbridge
├── client                # Frontend application
│   ├── src               # Source files for React app
│   ├── public            # Public assets
│   └── package.json      # Client dependencies and scripts
├── server                # Backend application
│   ├── routes            # API routes
│   ├── controllers       # Business logic for routes
│   ├── models            # MongoDB models
│   └── package.json      # Server dependencies and scripts
├── n8n                  # Automation workflows
├── .gitignore           # Git ignore file
├── docker-compose.yml    # Docker configuration
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- OpenAI API key (for AI career advice)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/skillbridge.git
   cd skillbridge
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in the `server` directory and fill in the required values.

### Running the Application

1. Start the MongoDB server (if using a local instance).
2. Start the backend server:
   ```
   cd server
   npm start
   ```

3. Start the frontend application:
   ```
   cd client
   npm start
   ```

### Usage

- Navigate to `http://localhost:3000` to access the application.
- Register a new account or log in to explore job listings and courses.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.