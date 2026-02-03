## News Aggregator

# Overview
This is a React-based news aggregator that fetches top headlines from NewsAPI and displays them in a responsive card grid. The app is intended to run on localhost only due to NewsAPI free-tier restrictions.

# Features
- Fetches top headlines for the US.
- Responsive card layout with article title, description, publish time, and image.
- Loading and error states.

# Tech Stack
- React + TypeScript (Create React App)
- React Query
- Axios
- Tailwind CSS
- NextUI

# Getting Started
1. Install dependencies:
   - `npm install`
2. Set up environment variables:
   - Create a `.env` file in the project root with:
     - `REACT_APP_NEWS_API_KEY=your_newsapi_key`
3. Run the app:
   - `npm start`

# Build
- `npm run build`

# Notes
- NewsAPI requests are restricted to localhost on the free plan.
