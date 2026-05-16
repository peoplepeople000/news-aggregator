import React from 'react';
import { FaClock, FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface NewsDisplayProps {
  news: NewsArticle[];
}

interface NewsArticle {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  source?: {
    name?: string;
  };
}

const NewsDisplay: React.FC<NewsDisplayProps> = ({ news }) => {
  if (!news || news.length === 0) {
    return (
      <section className="empty-state">
        <p className="eyebrow">No stories</p>
        <h2>No news available right now.</h2>
        <p>Try refreshing once the newswire has more results.</p>
      </section>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) {
      return 'Recently updated';
    }

    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'America/New_York',
    };

    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const articleUrl = (url?: string) => url || '#';
  const openArticle = (event: React.MouseEvent<HTMLAnchorElement>, url?: string) => {
    if (!url) {
      event.preventDefault();
      return;
    }

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
      return;
    }

    event.preventDefault();
    const opened = window.open(url, '_blank', 'noopener,noreferrer');

    if (!opened) {
      window.location.assign(url);
    }
  };

  return (
    <section className="news-layout">
      <div className="story-grid">
        {news.map((article, index) => (
          <a
            className={`story-card ${article.url ? '' : 'story-link-disabled'}`}
            href={articleUrl(article.url)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => openArticle(event, article.url)}
            aria-disabled={!article.url}
            key={`${article.url}-${index}`}
          >
            <div className="story-card-body">
              <div className="card-image-wrap">
                {article.urlToImage ? (
                  <img
                    className="card-image"
                    src={article.urlToImage}
                    alt={article.title || 'News story image'}
                  />
                ) : (
                  <div className="image-fallback">No image</div>
                )}
              </div>
              <div className="story-meta">
                <span>{article.source?.name || 'Newswire'}</span>
                <span>
                  <FaClock />
                  {formatDate(article.publishedAt)}
                </span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description || 'Open the story for more detail from the source.'}</p>
              <span className="read-link">
                Read story
                <FaArrowUpRightFromSquare />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsDisplay;
