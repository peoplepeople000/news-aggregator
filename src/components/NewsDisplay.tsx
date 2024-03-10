// src/components/NewsDisplay.tsx
import { Card, CardHeader, CardBody, Divider, Image } from '@nextui-org/react';
import React from 'react';
import { FaClock } from "react-icons/fa6";

interface NewsDisplayProps {
  news: any[];
}

const NewsDisplay: React.FC<NewsDisplayProps> = ({ news }) => {
  if (!news || news.length === 0) {
    return <p>No news available.</p>;
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' , timeZone: 'Asia/Taipei'};
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {news.map((article, index) => (
        <a href={article.url} target="_blank" rel="noreferrer" key={index}>
        <Card isBlurred  className='max-w-[400px] h-[450px]'>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h1 className='text-2xl text-center'>{article.title}</h1>
            <h5 className='text-rose-950'>{article.description}</h5>
            
          </CardHeader>
          <CardBody className='flex justify-center justify-end'>
            <p className='flex items-center'>
              <FaClock/>{formatDate(article.publishedAt)}
            </p>
            <Image src={article.urlToImage} alt={article.title} style={{ width: '400px', height: '200px' }}/>
          </CardBody>
          <Divider/>
        </Card>
        </a>
      ))}
    </div>
  );
};

export default NewsDisplay;
