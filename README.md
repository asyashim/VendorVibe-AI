# VendorVibe AI 🏗️

### AI-Powered Invoice Verification & Vendor Budget Monitoring

VendorVibe AI is an AI-assisted invoice verification and vendor budget monitoring application designed for construction companies. It aims to help businesses extract invoice information, compare invoices against purchase orders, monitor vendor spending, and identify potential discrepancies before approving payments.

**Project Status:** 🚧 In Development

## 🎯 Problem Statement

Construction companies regularly receive invoices from suppliers providing materials such as cement, steel, electrical supplies, and paint.

Manually checking these invoices against purchase orders and project budgets can be time-consuming and may lead to errors, duplicate payments, or unexpected spending.

VendorVibe AI aims to simplify this process by combining AI-assisted data extraction with rule-based verification and budget monitoring.

## ✨ Planned Features

* 📄 **Invoice Data Extraction:** Extract structured information from supplier invoices using AI.
* 🔍 **Invoice Verification:** Compare invoice details against purchase orders to identify discrepancies.
* 💰 **Vendor Budget Monitoring:** Track vendor spending against allocated budgets.
* ⚠️ **Discrepancy Detection:** Flag potential duplicate invoices, price mismatches, and quantity differences.
* 👤 **Human Approval Workflow:** Allow authorized users to review flagged invoices and make approval decisions.
* 📊 **Financial Overview:** Provide a dashboard for monitoring invoice status and vendor spending.

*These features are planned and will be implemented incrementally.*

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* Redux Toolkit Query

### Backend

* Node.js
* Express.js
* TypeScript
* Zod

### Database & Infrastructure

* MongoDB
* Mongoose
* Redis (planned)

### AI Integration

* Gemini AI
* Vercel AI SDK (planned)

### Development Tools

* Git
* GitHub
* VS Code

## 🏗️ Architecture

The backend is being organized using Clean Architecture and the Repository Pattern to separate business logic, application use cases, infrastructure, and HTTP handling.

Planned backend structure:

```text
server/
└── src/
    ├── domain/
    │   ├── entities/
    │   ├── repositories/
    │   └── errors/
    ├── application/
    │   ├── use-cases/
    │   ├── interfaces/
    │   └── dto/
    ├── infrastructure/
    │   ├── database/
    │   ├── repositories/
    │   ├── ai/
    │   └── cache/
    ├── presentation/
    │   └── http/
    │       ├── controllers/
    │       ├── routes/
    │       ├── middlewares/
    │       └── validators/
    ├── config/
    └── server.ts
```

## 🚀 Current Progress

* [x] Initialize the project and Git repository.
* [x] Set up the Express.js backend with TypeScript.
* [x] Configure environment variables and validation with Zod.
* [x] Add security headers, CORS, and JSON body parsing.
* [x] Create a health-check API endpoint.
* [x] Set up the MongoDB connection using Mongoose.
* [ ] Create the invoice domain entity.
* [ ] Implement invoice data validation.
* [ ] Build invoice processing APIs.
* [ ] Integrate Gemini AI for invoice data extraction.
* [ ] Implement purchase order verification.
* [ ] Add vendor budget monitoring.
* [ ] Build the React frontend.

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB Community Server
* Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd VendorVibe-AI
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Set up the backend

```bash
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/vendorvibe_ai
```

Ensure your MongoDB server is running before starting the application.

Never commit your actual `.env` file or API keys to GitHub.

### 4. Start the development server

```bash
npm run dev
```

### 5. Test the health-check endpoint

Open the following URL in your browser:

`http://localhost:5000/api/v1/health`

Expected response:

```json
{
  "success": true,
  "message": "VendorVibe AI API is running!"
}
```

## 🔐 Important Business Rules

* An invoice should be checked against relevant purchase order and receipt records when available.
* Budget overruns should trigger a review rather than automatically making an invoice invalid.
* AI-extracted information must be validated before being used in financial decisions.
* Final approval and payment decisions should remain under authorized human control.

## 📚 Learning Objectives

This project is also a hands-on learning experience focused on:

* Full-stack development with TypeScript.
* REST API development using Express.js.
* Database integration using MongoDB and Mongoose.
* Clean Architecture and the Repository Pattern.
* AI integration into real-world business workflows.
* Input validation, error handling, and secure configuration.
* Git and GitHub project management.

## 📌 Future Improvements

* Authentication and role-based access control.
* Invoice history and audit logs.
* Automated duplicate detection.
* Project-level financial reporting.
* Redis caching where appropriate.
* Automated testing and deployment.

## 👩‍💻 Author

Developed as a hands-on full-stack and AI application development project.

---

**VendorVibe AI — Making invoice verification smarter, one step at a time.**
