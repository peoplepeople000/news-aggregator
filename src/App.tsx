import React from 'react';
import { useQuery } from 'react-query';
import { getTopHeadlines } from './services/newsApi';
import NewsDisplay from './components/NewsDisplay';
import { Spinner } from '@nextui-org/react';

const App: React.FC = () => {
  const { data, isLoading, isError } = useQuery('topHeadlines', getTopHeadlines);

  if (isLoading) {
    return (
      <div className="app-shell loading-state">
        <div className="loading-panel">
          <Spinner size="lg" />
          <p>Gathering the latest headlines...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="app-shell">
        <main className="content-frame">
          <section className="empty-state">
            <p className="eyebrow">Newswire offline</p>
            <h1>We could not load the latest headlines.</h1>
            <p>Please check the News API key or try again in a moment.</p>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <main className="content-frame">
        <header className="masthead">
          <div>
            <p className="eyebrow">Live briefing</p>
            <h1>Recent News</h1>
          </div>
          <p className="masthead-copy">
            A cleaner scan of today&apos;s top stories from the U.S. newswire.
          </p>
        </header>

        <NewsDisplay news={data ?? []} />
      </main>
    </div>
  );
};

export default App;
