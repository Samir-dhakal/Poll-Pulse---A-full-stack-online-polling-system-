# PollPulse: A Real-Time Interactive Polling Platform

A modern, full-stack web application designed for real-time engagement and feedback. **PollPulse** provides a seamless platform for users to create, share, and participate in live polls, with results updating instantly as votes are cast.  

This project was developed to demonstrate core principles of back-end and front-end development, real-time communication, and data persistence.

---

## 🌟 Key Features

- **Real-time Live Updates:** Poll results are instantly updated on a dynamic dashboard using WebSocket technology.  
- **Flexible Participation:** Supports both anonymous and identified voting to suit various contexts.  
- **Automated Poll Management:** Polls can be configured to automatically close after a set duration.  
- **Secure Data Storage:** All poll data and results are securely stored in a database for future analysis.  
- **Intuitive User Interface:** A clean, user-friendly React-based interface for effortless poll creation and participation.  
- **Robust Backend:** Built with Spring Boot for a scalable and maintainable application.  

---

## 🛠️ Tech Stack

### Backend
- **Language:** Java  
- **Framework:** Spring Boot  
- **Build Tool:** Maven  
- **Dependencies:** Spring Web, Spring Data JPA, Spring WebSocket  
- **Database:** H2 Database (for local development)  

### Frontend
- **Library:** React.js  
- **Language:** JavaScript  
- **Package Manager:** npm  
- **Visualization:** Chart.js (for dynamic result dashboards)  

---

## 🏗️ Architecture

PollPulse follows a modular, layered architecture:

- **Backend Services:** A Spring Boot application exposes a REST API for core functionality (creating polls, voting) and a WebSocket endpoint for broadcasting real-time results.  
- **Frontend Interface:** A separate React application consumes these APIs to provide an interactive user experience.  
- **Data Persistence:** An in-memory H2 database is used for local development, providing persistent storage for all poll data.  

---

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites
- Java Development Kit (JDK) 21 or higher  
- A code editor (VS Code, IntelliJ IDEA)  
- npm (Node.js)  

### 1. Backend Setup
```bash
# Clone the repository
git clone https://github.com/your-username/pollpulse.git
cd pollpulse

# Run the Spring Boot application using Maven wrapper
./mvnw spring-boot:run
