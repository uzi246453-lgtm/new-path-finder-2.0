# Hackademic - Verified Career & Job Recommendation Engine

A modern, AI-powered career path finder that matches candidates with verified, real-time job listings from LinkedIn, Indeed, and Internshala.

## Features

- **Multi-step Career Profiling**: Age → Education → Degree → Technical Skill → Specializations (up to 3) → Salary Expectation
- **Real-time Job Search**: Live job postings from LinkedIn Jobs, Indeed, and Internshala using Google Search Grounding
- **Multi-Specialization Support**: Select up to 3 domain specializations for broader job matching
- **Education-based Salary Ranges**: 
  - 12th/Diploma: ₹2–4.5 LPA
  - Bachelors (UG): ₹2–6 LPA
  - Masters (PG): ₹16–20+ LPA
- **Verified Listings Only**: Zero expired postings, direct apply links to original portals
- **Dark/Light Theme**: Toggle between themes
- **Advanced Filters**: By source, location, experience, work mode, posted date

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4, Vite
- **Backend**: Express.js, TypeScript
- **AI**: Google Gemini API with Search Grounding
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Gemini API Key (from [Google AI Studio](https://aistudio.google.com/apikey))

### Installation

```bash
# Clone the repository
git clone https://github.com/negi96926-cloud/pathfinder.git
cd pathfinder

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY

# Start development server
npm run dev
```

### Environment Variables

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

## Usage

1. **Enter Age** (16-45)
2. **Select Education Level** (12th, Diploma, UG, PG)
3. **Select Degree** (if UG/PG)
4. **Choose Technical Skill Track** (Cybersecurity, Web Development, Data Analytics, etc.)
5. **Select Specializations** (up to 3)
6. **Set Salary Expectation** (filtered by education)
7. **View Matched Jobs** with live search and filters

## Job Sources

- **LinkedIn Jobs** - Professional networking & job listings
- **Indeed** - Global job search engine
- **Internshala** - Internships & entry-level jobs in India

## Project Structure

```
src/
├── components/          # React components
│   ├── AgeStep.tsx
│   ├── EducationStep.tsx
│   ├── DegreeStep.tsx
│   ├── TechnicalSkillStep.tsx
│   ├── DomainStep.tsx   # Multi-select specializations
│   ├── SalaryStep.tsx
│   ├── JobResultsView.tsx
│   ├── JobCard.tsx
│   └── ...
├── data/                # Career data & job database
├── services/            # API services
├── utils/               # Utility functions
├── types.ts             # TypeScript types
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## API Endpoints

- `POST /api/jobs/live-search` - Real-time job search with Google Search Grounding

## License

MIT License - feel free to use for learning or commercial purposes.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request