# Cloud-Based Team Report Management System using AWS

## Overview
This project is a cloud-native backend application developed using Node.js, Express.js, PostgreSQL, and AWS services. The system manages employees, teams, report APIs, and cloud storage integration.

The project demonstrates deployment and integration of multiple AWS services including EC2, RDS, S3, Lambda, and EventBridge.

---

# Features

- Employee Management API
- Team Management API
- Team Report Generation API
- PostgreSQL Database Integration
- AWS RDS Cloud Database
- AWS EC2 Deployment
- AWS S3 File Upload Integration
- AWS Lambda Automation
- AWS EventBridge Scheduling
- RESTful APIs
- Cloud Architecture Deployment

---

# Tech Stack

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL
- AWS RDS

## Cloud Services
- AWS EC2
- AWS S3
- AWS Lambda
- AWS EventBridge

## Tools
- Git
- GitHub
- VS Code
- pgAdmin

---

# API Endpoints

## Employees
GET /employees

## Teams
GET /teams

## Reports
GET /reports/team-members

## Upload
POST /upload

---

# Project Structure

```bash
team-report-app/
│
├── routes/
│   ├── employees.js
│   ├── teams.js
│   ├── reports.js
│   └── upload.js
│
├── db.js
├── server.js
├── package.json
├── .env
└── README.md
```

---

# AWS Services Used

## Amazon EC2
Used for hosting the backend application.

## Amazon RDS
Used for managed PostgreSQL database hosting.

## Amazon S3
Used for storing uploaded reports and files.

## AWS Lambda
Used for serverless automation tasks.

## Amazon EventBridge
Used for scheduled execution of Lambda functions.

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/Samael1125/Multi-Team-Platforms.git
```

## Install Dependencies

```bash
npm install
```

## Run Server

```bash
node server.js
```

---

# Screenshots

Add:
- EC2 Instance
- RDS Database
- S3 Bucket
- Lambda Function
- EventBridge Rule
- API Outputs

---

# Future Enhancements

- Frontend Dashboard
- Authentication & Authorization
- Report Analytics
- Docker Deployment
- CI/CD Pipeline
- Kubernetes Deployment

---

# Author

Utkarsh Singh Jhala

---

# GitHub Repository

https://github.com/Samael1125/Multi-Team-Platforms