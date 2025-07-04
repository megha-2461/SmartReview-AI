# Smart Review AI

## Overview
SmartReview AI is a full-stack web application that provides intelligent, automated code reviews using Google's Gemini AI. Developers can input code, receive instant feedback, and improve quality based on industry best practices—all within a clean, responsive interface.

## Technologies Used

### Backend
- **Express.js** 
- **CORS** 
- **Axios** 
- **dotenv** 
- **Google Generative AI SDK**

### Frontend
- **React.js** - A JavaScript library for building user interfaces.
- **Vite** - A fast and modern frontend build tool.
- **React Simple Code Editor** - Lightweight code editor for live editing.
- **Prism.js** - Syntax highlighting for the code editor.
- **React Markdown** - To render markdown-based AI reviews.
- **Highlight.js** - Additional syntax highlighting support.
- **Axios** - To send requests to the backend.


## How It Works
1. Users enter code into the **code editor**.
2. Clicking the **Review** button sends the code to the backend API.
3. The backend processes the code and returns AI-generated feedback.
4. The review results are displayed in the **review panel**.

## Features
✅ **Live Code Editing** 
✅ **Syntax Highlighting** 
✅ **AI Code Review** 
✅ **Fully Responsive** 
✅ **Markdown Support** 


## Getting Started

### Backend Setup
```sh
git clone https://github.com/your-username/code-review-ai.git
cd code-review-ai
cd backend
npm install
npm start
```

### Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```

## Usage
- Visit http://localhost:5173 to access the frontend.
- Ensure the backend is running on http://localhost:8080
- Enter code in the editor and click **Review**.
- Get instant AI feedback in the review section.



## Contributing
Have suggestions or want to improve it further? Fork the repo, open a pull request, or raise an issue—your contributions are welcome!



