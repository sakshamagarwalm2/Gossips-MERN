# 🚀 Gossips-MERN - Real-time Chat Application

A modern real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io, featuring a beautiful UI with Tailwind CSS and Daisy UI.

![Demo](https://gossips-mern.onrender.com/)

![Chat App Demo]()

## ✨ Features

- 🔐 User authentication with JWT
- 💬 Real-time messaging with Socket.io
- 🟢 Online user status
- 🎨 Modern UI with Tailwind CSS & Daisy UI
- 📱 Fully responsive design
- 🔍 Global state management with Zustand
- ⚡ Performance optimized
- 🛡️ Error handling (both client and server-side)
- ☁️ Image upload with Cloudinary
- ![Chat App Demo]()
- ![Chat App Demo]()

## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- Socket.io-client for real-time communication
- Tailwind CSS & Daisy UI for styling
- Zustand for state management
- React Router for navigation
- Axios for API requests
- React Hot Toast for notifications
- ![Chat App Demo]()

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- Socket.io for real-time functionality
- JWT for authentication
- Bcrypt for password hashing
- Cloudinary for image storage
- ![Chat App Demo]()

## 📁 Project Structure

\`\`\`
Gossips-MERN/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── constants/
│       ├── lib/
│       ├── pages/
│       ├── store/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seeds/
│   │   └── index.js
│   └── .env
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB
- Cloudinary account

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/Gossips-MERN.git
cd Gossips-MERN
\`\`\`

2. Install dependencies for backend
\`\`\`bash
cd backend
npm install
\`\`\`

3. Install dependencies for frontend
\`\`\`bash
cd frontend
npm install
\`\`\`

4. Set up environment variables

Backend (.env):
\`\`\`env
PORT=3000
NODE_ENV=development
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:5173
\`\`\`

Frontend (.env):
\`\`\`env
VITE_API_URL=http://localhost:3000
\`\`\`

5. Start the development servers

Backend:
\`\`\`bash
cd backend
npm run dev
\`\`\`

Frontend:
\`\`\`bash
cd frontend
npm run dev
\`\`\`

## 🌟 Usage

1. Register a new account or login with existing credentials
2. Start chatting with other users in real-time
3. Update your profile picture using Cloudinary integration
4. See online/offline status of other users
5. Enjoy real-time messaging with instant updates

## 🔒 Environment Variables

### Backend
- \`PORT\`: Server port (default: 3000)
- \`NODE_ENV\`: Development/production environment
- \`JWT_SECRET\`: Secret key for JWT authentication
- \`MONGODB_URI\`: MongoDB connection string
- \`CLOUDINARY_*\`: Cloudinary configuration
- \`CLIENT_URL\`: Frontend application URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Socket.io Documentation](https://socket.io/docs/v4)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Daisy UI](https://daisyui.com)
- [Cloudinary](https://cloudinary.com)

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/Gossips-MERN](https://github.com/yourusername/Gossips-MERN)
