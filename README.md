# Social-kids test website

This project provides backend with nestJS, MongoDB, frontend with ReactJS. It is designed and maintained by **PhucPD**.

## Features

- [List the main features here]
- Filter repositories by programming language
- [Any other features]

## Table of Contents

1.  [Installation](#installation)
2.  [Running the Project](#running-the-project)
3.  [Usage](#usage)
4.  [API Endpoints](#api-endpoints)
5.  [Contributing](#contributing)
6.  [License](#license)

## Installation

### Prerequisites

- **Docker**: Make sure you have Docker installed. You can download it from here.
- **Node.js** and **npm**: These are optional if you want to run the project without Docker.

### Clone the Repository

bash

Copy code

`git clone https://github.com/ftspirit/demo-nestJS.git
cd demo-nestJS`

## Running the Project

### Using Docker

1.  **Using Docker Compose**:

    bash

    Copy code

    `docker compose up -d --build`

    This command will:

    - Run the app on port **3000** (you can adjust the port as needed).

2.  **Access the Application**: Open your browser and go to `http://localhost:3000` to view the application.

### Without Docker (Optional)

## Usage

Once running, you can:

- Access the main app UI at `http://localhost:3000`
- Use the filtering feature to filter repositories by language, such as TypeScript, JavaScript, Python, or Java.

## API Endpoints

- `GET /repos`: Retrieve a list of all repositories.
- `GET /repos/all?language=<language>`: Retrieve repositories filtered by language.

## Contributing

Feel free to fork the project, make enhancements, and submit pull requests. Contributions are welcome and appreciated!

## License

This project is licensed under the Fee License.

---

Let me know if you'd like to add more details to specific sections.
