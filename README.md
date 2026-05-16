# News Aggregator

A React + TypeScript news aggregator that displays U.S. top headlines from NewsAPI in a responsive editorial card layout.

## Features

- Fetches U.S. top headlines from NewsAPI.
- Shows article title, source, publish time, description, and image.
- Opens articles in a new browser tab when supported.
- Includes loading, error, and empty states.
- Uses a Vite-based development and build setup.

## Tech Stack

- React
- TypeScript
- Vite
- React Query
- Axios
- Tailwind CSS
- Vitest

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.local.example .env.local
```

Then replace the placeholder with your NewsAPI key:

```bash
VITE_NEWS_API_KEY=your_newsapi_key
```

Start the development server:

```bash
npm start
```

The app runs locally at:

```text
http://127.0.0.1:5173/
```

## Scripts

```bash
npm start
npm run dev
npm run build
npm run preview
npm test
```

## NewsAPI Free Plan Limitation

This app currently calls NewsAPI directly from the browser. NewsAPI's free Developer plan is intended for development/testing and only allows browser requests from localhost.

Because of that, this version is best used locally. A public Firebase Hosting deployment may fail with CORS or plan-limit errors unless you use a paid NewsAPI plan or move the API request behind a backend proxy such as Firebase Functions.

## Production Note

Do not expose a production API key in frontend code. For a real deployment, route requests through a backend function and keep the API key in server-side environment variables.
