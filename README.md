# **YouContent - AI-Powered Content Creation Tools** 🚀  

**YouContent** is a full-stack **React + FastAPI** application that provides **AI-powered content creation tools** like Text-to-Image, YouTube Summarizer, Text-to-Code, AI Chatbot, Resume Builder, and more! 🧠✨  

---

## 🌟 **Features**
### 🔹 **Frontend (React.js)**
- ✅ **Text-to-Image**: Generate stunning AI images from text  
- ✅ **YouTube Summarizer**: Convert YouTube videos into concise summaries  
- ✅ **Text-to-Article**: Generate well-structured articles from ideas  
- ✅ **Text-to-Code**: Convert natural language into programming code  
- ✅ **AI Chatbot**: Engage with AI-powered chatbot for Q&A or brainstorming  
- ✅ **Image Enhancer**: Improve low-resolution images with AI  
- ✅ **Resume Builder**: Create professional resumes  
- ✅ **Text-to-MCQ**: Generate multiple-choice questions from any text  

### 🔹 **Backend (FastAPI)**
- 🚀 **Gemini AI (Google Generative AI API)** for content generation  
- 🎥 **YouTube Transcript API** for extracting video subtitles  
- 🔥 **CORS-enabled FastAPI Server** for secure API calls  
- ⚡ **Optimized API Endpoints** for AI-generated content  

---

## 📌 **Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Anshuflame04/YouContent.git
cd YouContent
```

### **2️⃣ Backend Setup (FastAPI)**
1. Create a virtual environment  
   ```sh
   python -m venv env
   source env/bin/activate  # Mac/Linux
   env\Scripts\activate      # Windows
   ```
2. Install dependencies  
   ```sh
   pip install -r requirements.txt
   ```
3. Set up **Google Gemini API Key**  
   - Create a `.env` file in the backend folder  
   - Add the following line:  
     ```sh
     GEMINI_API_KEY=your_google_gemini_api_key
     ```
4. Run the backend server  
   ```sh
   uvicorn main:app --reload
   ```

### **3️⃣ Frontend Setup (React)**
1. Navigate to the frontend folder  
   ```sh
   cd frontend
   ```
2. Install dependencies  
   ```sh
   npm install
   ```
3. Start the React app  
   ```sh
   npm start
   ```

---

## 📡 **API Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/generate-article/` | Generate an article for blogs, LinkedIn, Twitter, etc. |
| `POST` | `/generate-code/` | Convert text descriptions into code snippets |
| `POST` | `/summarize/` | Summarize YouTube videos |
| `POST` | `/api/chat/` | AI Chatbot conversation |
| `POST` | `/generate-mcq/` | Generate MCQs from text |
| `POST` | `/check-answers/` | Check MCQ answers |

---
---

## 🎯 **How It Works**
1️⃣ **Select a Tool** (Text-to-Image, Summarizer, AI Chatbot, etc.)  
2️⃣ **Enter Input** (Text, YouTube Link, or Image)  
3️⃣ **Click "Generate"** (Uses AI to process the request)  
4️⃣ **Get Results Instantly!** (Download or use generated content)  

---

## 🔧 **Tech Stack**
### **Frontend:**
- **React.js** (UI & Components)  
- **React Router** (Navigation)  
- **React Icons** (UI Enhancements)  

### **Backend:**
- **FastAPI** (Backend API)  
- **Google Gemini AI** (AI Content Generation)  
- **YouTube Transcript API** (Video Transcripts)  
- **CORS Middleware** (Security)  

---

## 📌 **Future Improvements**
- 🔄 **User Authentication (Login/Signup)**  
- 📂 **Save and Manage Generated Content**  
- 🏆 **AI-Powered Resume Analysis**  
- 🎨 **Better UI/UX Enhancements**  

---

## 🤝 **Contributing**
Want to improve this project? Follow these steps:  
1. **Fork the repo**  
2. **Create a feature branch** (`git checkout -b feature-name`)  
3. **Commit changes** (`git commit -m "Added new feature"`)  
4. **Push to GitHub** (`git push origin feature-name`)  
5. **Open a Pull Request**  

---

## 📞 **Contact & Support**
📧 **Email:** anshuflame04@example.com  
🌍 **GitHub:** [Anshuflame04/YouContent](https://github.com/Anshuflame04/YouContent)  
🚀 **Contributions & Feedback are Welcome!**  

---

### 🎉 **Enjoy AI-Powered Content Creation!** 🚀
