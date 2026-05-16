# AI Layout Agent

An AI-powered layout transformation tool that allows users to modify design layouts using natural language prompts.

The application provides a live preview canvas where users can interact with an AI assistant to transform layout structures such as repositioning elements, resizing text, converting aspect ratios, and centering components.

---

# Features

- AI-driven layout editing
- Real-time preview rendering
- Natural language prompt interface
- Dynamic artboard resizing
- Text resizing and repositioning
- Layout transformation engine
- Responsive preview scaling
- Zustand state management
- Modern SaaS-inspired UI
- Modular frontend and backend architecture

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Zustand
- Axios
- Framer Motion

## Backend

- Node.js
- Express.js
- OpenAI API

---

# Project Structure

```bash
layout-agent/
│
├── client/
│   ├── src/
│   │
│   ├── components/
│   │   ├── chat/
│   │   ├── preview/
│   │   ├── panels/
│   │   └── ui/
│   │
│   ├── hooks/
│   ├── store/
│   ├── services/
│   ├── utils/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│   ├── routes/
│   ├── services/
│   ├── prompts/
│   ├── validators/
│   ├── utils/
│   ├── index.js
│   └── .env
│
├── README.md
└── APPROACH.md
Installation
Clone Repository
git clone <repository-url>
cd layout-agent
Frontend Setup
cd client

npm install

npm run dev

Frontend runs on:

http://localhost:5173
Backend Setup
cd server

npm install

npm run dev

Backend runs on:

http://localhost:3001
Environment Variables

Create a .env file inside the server folder.

OPENAI_API_KEY=your_openai_api_key
PORT=3001
AI Prompt Examples

Try prompts like:

Move headline to top
Center the product
Convert to 9:16
Make headline smaller
Layout Transformation Engine

The backend transformation engine supports:

Move nodes
Resize text
Resize nodes
Center alignment
Artboard conversion
Text color changes
Preview Rendering System

The preview engine dynamically scales all nodes proportionally based on the artboard dimensions.

Supported node types:

Text
Images
Shapes
State Management

Zustand is used for:

Layout state
Chat messages
Loading states
Live preview updates
Future Improvements
Collision detection
Smart auto-layout
Drag-and-drop editing
Undo/redo history
Export functionality
AI semantic grouping
Advanced typography controls
Layer management
Multi-artboard support
Challenges Faced
Dynamic layout scaling
Real-time node rendering
Maintaining proportional positioning
AI response parsing
State synchronization
Responsive preview rendering
Solution Approach

The project uses:

A structured layout JSON system
AI prompt interpretation
Transformation actions
Dynamic rendering engine
Real-time frontend updates

The AI interprets user prompts and converts them into layout transformation actions which are then executed by the transformation engine.

Author

Vinay Manchisaraf