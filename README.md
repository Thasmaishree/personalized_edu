Personalized Edu 

This is a Personalized Edu platform. It supports flexible code generation, explanation, and debugging powered by Groq's LLaMA3-70B model.

💡 Features

💻 Code Assistant: Generate, explain, or debug code with a flexible prompt-based system.

🧠 Tutor Assistant: Get beginner-friendly explanations with analogies and quizzes.

🗣️ Mock Interview: Domain-specific interview questions with feedback.

Project Structure 

personalized-edu/
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   └── routes/
│   │       ├── tutor.ts
│   │       ├── code.ts
│   │       └── mock.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── index.html
    ├── vite.config.ts
    ├── package.json
    ├── tailwind.config.ts
    ├── postcss.config.js
    ├── tsconfig.json
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── api.ts
        ├── pages/
        │   ├── Home.tsx
        │   ├── Tutor.tsx
        │   ├── CodeTool.tsx
        │   └── MockInterview.tsx
        └── components/
            └── Header.tsx

🛠️ Tech Stack

Node.js with Express

TypeScript

Groq API with LLaMA3-70B

🚀 Getting Started

1. Clone the repository

git clone https://github.com/yourusername/personalized-edu.git
cd personalized-edu/backend

2. Install dependencies

pnpm install

3. Set up environment variables

Create a .env file:

GROQ_API_KEY=your_groq_api_key_here

4. Run the server

pnpm dev

The server will be available at: http://localhost:3001

📬 API Endpoints

Code Assistant

POST /api/code

{
  "instruction": "Sort an array using quicksort",
  "type": "generate" // or "explain", "debug"
}

Tutor Assistant

POST /api/tutor

{
  "topic": "What is a hash table?"
}

Mock Interview

POST /api/mock

{
  "role": "Frontend Developer"
}

📄 License

MIT

🙌 Author

Made with ❤️ by Thasmaishree R

Feel free to contribute, suggest ideas, or raise issues!

