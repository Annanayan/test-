# Math Village - Product Technical Specification (PRD)

## 📋 Document Overview

**Document Type:** Product Requirements Document (PRD)
**Project Name:** Math Village
**Version:** v1.0.0
**Created Date:** September 28, 2025
**Target Audience:** Product Managers, Engineers, Designers, QA Teams

---

## 🎯 Product Overview

### Product Positioning
Math Village is an intelligent mathematics learning platform designed for students, featuring AI-powered tutoring, personalized practice sessions, and data-driven learning analytics to enhance mathematical competency.

### Core Value Proposition
- **Personalized Learning**: Adaptive content delivery based on individual student capabilities
- **AI-Powered Tutoring**: 24/7 mathematical problem-solving assistance and guidance
- **Data-Driven Insights**: Real-time tracking of learning progress and performance metrics
- **Teacher Analytics**: Comprehensive student learning analytics for educators

---

## 🏗️ System Architecture Overview

### Architecture Pattern
**Frontend-Backend Separation + Microservices** Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Student Web    │    │   Teacher Web   │    │  Admin Panel    │
│   Application    │    │  Application    │    │   System        │
│  (UI Interface)  │    │ (Analytics)     │    │ (Data Mgmt)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   RESTful API   │
                    │  Backend Service │
                    └─────────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
        ┌───────────────┐ ┌─────────────┐ ┌─────────────┐
        │ SQLite Database│ │  OpenAI API │ │ File Storage │
        │  (User Data)   │ │(AI Chat Svc) │ │(Static Assets)│
        └───────────────┘ └─────────────┘ └─────────────┘
```

---

## 💻 Technology Stack Details

### Frontend Technology Stack

#### 🎨 Student Application (`math-village-frontend`)
- **Framework:** React 18.2.0 + TypeScript
- **Build Tool:** Vite 5.2.0
- **Routing:** React Router DOM 6.23.1
- **Styling:** Tailwind CSS 3.4.3
- **State Management:** React Hooks (useState, useContext)
- **HTTP Client:** Axios 1.7.2
- **Math Rendering:** KaTeX 0.16.22 + react-markdown
- **Charts:** Recharts 2.12.7
- **Icons:** Lucide React 0.379.0

#### 📊 Teacher Application (`math-village-teacher`)
- **Framework:** React 18.2.0 + TypeScript
- **Build Tool:** Vite 5.2.0
- **Routing:** React Router DOM 6.23.1
- **Styling:** Tailwind CSS 3.4.3
- **Charts:** Recharts 2.12.7
- **HTTP Client:** Axios 1.7.2

### Backend Technology Stack

#### 🔧 API Service (`math-village-backend`)
- **Runtime:** Node.js 20.x
- **Framework:** Express.js 5.1.0
- **Language:** TypeScript 5.4.5
- **Database:** SQLite (better-sqlite3 9.6.0)
- **Authentication:** JWT (jsonwebtoken 9.0.2)
- **Password Encryption:** bcryptjs 3.0.2
- **AI Service:** OpenAI API 5.22.0
- **CORS:** CORS 2.8.5
- **Development:** Nodemon + ts-node

---

## 🎨 Design System Specifications

### Design System

#### Color Palette
```css
/* Primary Colors - Blue Scheme */
primary: {
  50: '#f0f9ff',   /* Lightest Blue */
  500: '#0ea5e9',  /* Primary Blue */
  600: '#0284c7',  /* Dark Blue */
  900: '#0c4a6e'   /* Darkest Blue */
}

/* Secondary Colors - Purple Scheme */
secondary: {
  50: '#fdf4ff',   /* Lightest Purple */
  500: '#d946ef',  /* Primary Purple */
  600: '#c026d3',  /* Dark Purple */
  900: '#701a75'   /* Darkest Purple */
}
```

#### Typography
- **Primary Font:** Inter, system-ui, sans-serif
- **Code Font:** Monospace for mathematical formula display

#### Layout Characteristics
- **Responsive Design:** Desktop and mobile support
- **Component-Based:** Highly modular UI components
- **Theme Support:** Multiple color theme variations

---

## 🚀 Core Feature Modules

### 1. User Authentication System
- **Registration/Login:** Username-password authentication
- **Session Management:** JWT token auto-renewal
- **Access Control:** Role-based authorization

### 2. Student Learning Platform

#### 📊 Learning Dashboard
- **Learning Statistics:** Real-time progress and performance display
- **Performance Metrics:** Answer accuracy, study time tracking
- **Data Visualization:** Recharts-powered trend analysis

#### 📚 Daily Review Module
- **Knowledge Review:** Systematic review of previous content
- **Error Correction:** Targeted practice for incorrect answers
- **Progress Tracking:** Review effectiveness monitoring

#### 🎯 Daily Practice Module
- **Categorized Practice:** Math topic-based exercises
  - Numbers & Algebra
  - Functions & Modeling
  - Geometry
  - Statistics & Probability
  - Projects & Applications
  - Reasoning & Proof
- **Adaptive Difficulty:** Capability-based difficulty adjustment
- **Instant Feedback:** Immediate result display after answers

#### 🧠 AI Intelligence Assistant
- **Natural Language Processing:** Mathematical problem comprehension
- **LaTeX Rendering:** Professional mathematical formula display
- **Step-by-Step Solutions:** Detailed problem-solving process
- **Knowledge Connections:** Related concept recommendations

#### 📖 Math Stories Module
- **Contextual Learning:** Mathematics through storytelling
- **Interactive Experience:** Enhanced learning engagement
- **Real-World Applications:** Practical mathematical scenarios

#### 💎 Personal Collection
- **Error Collection:** Automatic incorrect answer compilation
- **Knowledge Organization:** Personalized concept notes
- **Review Planning:** Intelligent review reminders

#### 🌍 Community Plaza
- **Learning Exchange:** Student discussion platform
- **Achievement Sharing:** Learning accomplishment showcase
- **Peer Learning:** Collaborative learning support

### 3. Teacher Analytics Platform

#### 📈 Class Overview
- **Overall Performance:** Class learning statistics
- **Trend Analysis:** Learning progress trends
- **Problem Identification:** Learning difficulty detection

#### 👥 Student Details
- **Individual Profiles:** Detailed student learning data
- **Strength/Weakness Analysis:** Subject performance comparison
- **Learning Recommendations:** Personalized improvement suggestions

---

## 📊 Database Design

### Core Data Tables

#### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME,
  login_count INTEGER DEFAULT 0
);
```

#### Learning Progress Table
```sql
CREATE TABLE learning_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  subject TEXT,
  topic TEXT,
  problems_attempted INTEGER DEFAULT 0,
  problems_solved INTEGER DEFAULT 0,
  accuracy REAL DEFAULT 0,
  last_studied DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id)
);
```

#### AI Conversations Table
```sql
CREATE TABLE ai_conversations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  question TEXT,
  answer TEXT,
  topic_category TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  helpful_rating INTEGER,
  FOREIGN KEY (user_id) REFERENCES users (id)
);
```

#### User Behavior Tracking Table
```sql
CREATE TABLE click_heatmap (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  page_name TEXT,
  element_id TEXT,
  element_type TEXT,
  click_count INTEGER DEFAULT 1,
  last_clicked DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id)
);
```

---

## 🔌 API Interface Design

### Authentication APIs
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user information

### Learning Tracking APIs
- `POST /track/page-view` - Page visit tracking
- `POST /track/click` - Click behavior tracking
- `POST /track/learning` - Learning progress tracking

### AI Service APIs
- `POST /ai/chat` - AI conversation interface

### User Data APIs
- `GET /user/stats` - User statistics data
- `GET /user/learning-report` - Learning reports

### Teacher APIs
- `GET /teacher/students` - Get student list
- `GET /teacher/student/:userId` - Get student details
- `GET /teacher/class-stats` - Get class statistics

---

## 🔧 Development Environment Setup

### Frontend Development
```bash
# Student Application
cd math-village-frontend
npm install
npm run dev  # Start development server (default port: 5173)

# Teacher Application
cd math-village-teacher
npm install
npm run dev  # Start development server (port: 5174)
```

### Backend Development
```bash
cd math-village-backend
npm install
npm run dev  # Start development server (port: 3000)
```

### Environment Variables
```env
# .env file
PORT=3000
JWT_SECRET=your-secret-key-change-this-in-production
TEACHER_KEY=teacher-secret-key-2024
OPENAI_API_KEY=your-openai-api-key
SQLITE_PATH=./data/app.db
CORS_ORIGIN=http://localhost:5173,http://localhost:5174
```

---

## 🚀 Deployment Architecture

### Production Environment

#### Live Deployment URLs
- **Backend API:** https://math-village-backend-1.onrender.com/
- **Frontend Applications:** Deployed via GitHub → Vercel integration
  - Student Application: Vercel hosting
  - Teacher Application: Vercel hosting

#### Deployment Workflow
```
Local Development → GitHub Repository → Automatic Cloud Deployment
      ↓                    ↓                        ↓
[Local Updates]    [Git Push Origin]    [Auto Deploy: Vercel + Render]
```

#### Infrastructure Setup
- **Local Development:** Full-stack development environment
- **Version Control:** GitHub repository for source code management
- **Frontend Deployment:** Vercel (auto-deploy from GitHub)
- **Backend Deployment:** Render (auto-deploy from GitHub)
- **Database:** SQLite file storage on Render
- **CI/CD Pipeline:** Automatic deployment on code push

#### Cross-Origin Configuration
The backend on Render is configured with CORS settings to allow Vercel-hosted frontend applications:

```javascript
// CORS configuration in backend
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman)
    if (!origin) return callback(null, true);

    // Allow localhost for development
    if (origin.startsWith('http://localhost:') ||
        origin.startsWith('http://127.0.0.1:')) {
      return callback(null, true);
    }

    // Allow Vercel deployment origins from environment variable
    const allowedOrigins = process.env.CORS_ORIGIN ?
      process.env.CORS_ORIGIN.split(',') : [];
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true
}));
```

#### Environment Variables Configuration

**Render Backend Environment:**
```env
PORT=3000
JWT_SECRET=production-secret-key
TEACHER_KEY=teacher-secret-key-2024
OPENAI_API_KEY=your-openai-api-key
SQLITE_PATH=./data/app.db
CORS_ORIGIN=https://your-vercel-frontend-url.vercel.app,https://your-vercel-teacher-url.vercel.app
```

**Vercel Frontend Environment:**
```env
VITE_API_BASE_URL=https://math-village-backend-1.onrender.com
```

**Local Development Environment:**
```env
VITE_API_BASE_URL=http://localhost:3000
```

### Development & Deployment Workflow

#### Local Development
```bash
# Run full-stack locally
cd math-village-backend && npm run dev  # Port 3000
cd math-village-frontend && npm run dev # Port 5173
cd math-village-teacher && npm run dev  # Port 5174
```

#### Deployment Process
1. **Local Development:** Code development and testing in local environment
2. **Code Commit:** Commit changes to local Git repository
3. **GitHub Push:** Push updates to GitHub repository
4. **Automatic Deployment:**
   - **Vercel:** Automatically detects GitHub changes and deploys frontend applications
   - **Render:** Automatically detects GitHub changes and deploys backend service
5. **Live Update:** Applications are automatically updated with new features

### Build Commands
```bash
# Frontend build (runs automatically on Vercel)
npm run build
npm run preview

# Backend build (runs automatically on Render)
npm run build
npm start

# Local development
npm run dev
```

### Deployment Pipeline Benefits
- **Zero-Downtime Deployment:** Automatic rolling updates
- **Version Control Integration:** Every deployment linked to Git commits
- **Environment Consistency:** Same codebase across local, staging, and production
- **Automated Testing:** Build failures prevent deployment
- **Rollback Capability:** Easy revert to previous versions via Git

---

## 📱 User Experience Design

### Interaction Features
1. **Responsive Interface:** Adapts to various screen sizes
2. **Smooth Animations:** CSS transition effects
3. **Instant Feedback:** Immediate result display after operations
4. **Intelligent Hints:** Context-relevant help information

### Mathematical Rendering
- **LaTeX Support:** Professional mathematical formula display
- **Real-time Rendering:** Instant formula preview during input
- **Readability Optimization:** Student-friendly font sizes

---

## 🔒 Security & Performance

### Security Measures
- **JWT Authentication:** Secure identity verification mechanism
- **Password Encryption:** bcrypt one-way encryption
- **CORS Configuration:** Cross-origin request control
- **Input Validation:** Malicious input prevention

### Performance Optimization
- **Code Splitting:** Component lazy loading
- **Lazy Loading:** Image and route lazy loading
- **Caching Strategy:** HTTP caching and local storage
- **Database Optimization:** Index and query optimization

---

## 📊 Data Analytics Features

### Learning Analytics
- **Progress Tracking:** Real-time learning progress monitoring
- **Capability Assessment:** Answer data-based ability analysis
- **Learning Paths:** Personalized learning recommendations
- **Early Warning System:** Learning difficulty early identification

### Teacher Insights
- **Class Reports:** Overall learning situation analysis
- **Individual Profiles:** Detailed student learning trajectories
- **Comparative Analysis:** Inter-student performance comparison
- **Trend Prediction:** Learning performance trend analysis

---

## 🚧 Technical Debt & Improvement Directions

### Current Limitations
1. **Single-machine Database:** SQLite suitable for small-scale applications
2. **No Real-time Communication:** Lacks WebSocket support
3. **Limited Caching:** Primarily relies on client-side caching

### Expansion Plans
1. **Database Upgrade:** Migration to PostgreSQL
2. **Microservice Decomposition:** Independent module deployment
3. **Real-time Features:** Add real-time collaborative learning
4. **Mobile Applications:** Develop native mobile apps

---

## 📚 Development Standards

### Code Standards
- **TypeScript:** Strong type checking
- **ESLint:** Code quality checking
- **Prettier:** Code formatting
- **Component-based:** Highly reusable component design

### Testing Strategy
- **Unit Testing:** Core functionality testing
- **Integration Testing:** API interface testing
- **End-to-End Testing:** User workflow testing

---

## 📈 Success Metrics

### User Engagement
- **Daily Active Users:** DAU
- **Session Duration:** Average learning time
- **Completion Rate:** Exercise completion percentage

### Learning Effectiveness
- **Accuracy Improvement:** Answer correctness rate enhancement
- **Knowledge Coverage:** Learning content breadth
- **Progress Consistency:** Learning pace stability

### Teacher Satisfaction
- **Usage Frequency:** Teacher portal access frequency
- **Data Usefulness:** Analytics report quality evaluation
- **Feature Completeness:** Teaching requirement coverage

---

## 🔮 Future Development Roadmap

### Short-term Goals (3-6 months)
- **Performance Optimization:** Improve page loading speed
- **Feature Enhancement:** Complete missing core functionalities
- **User Experience:** Optimize interaction workflows

### Medium-term Goals (6-12 months)
- **Enhanced AI Capabilities:** More intelligent personalized recommendations
- **Social Features:** Strengthen community interactions
- **Multi-language Support:** Internationalization expansion

### Long-term Goals (1-2 years)
- **Platform Ecosystem:** Build complete educational ecosystem
- **Data-Driven:** Deep learning analysis models
- **Business Model:** Sustainable profitability model

---

## 📞 Technical Support

### Development Team Contact
- **Project Maintenance:** Development Team
- **Technical Documentation:** Project README.md
- **Issue Reporting:** GitHub Issues

### Related Resources
- **Frontend Learning:** React + TypeScript Official Documentation
- **Backend Learning:** Node.js + Express Official Documentation
- **Database:** SQLite Official Documentation
- **AI Service:** OpenAI API Documentation

---

*This document will be continuously updated as the project evolves. Please follow the latest version.*