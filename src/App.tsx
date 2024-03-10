import React from 'react';
import { useQuery } from 'react-query';
import { getTopHeadlines } from './services/newsApi';
import NewsDisplay from './components/NewsDisplay';
import { Spinner } from '@nextui-org/react';

const App: React.FC = () => {
  const { data, isLoading, isError } = useQuery('topHeadlines', getTopHeadlines);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
        <Spinner/>
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching top headlines</p>;
  }

  console.log(data);

  return (
    <div>
      <p className='text-7xl text-center font-serif'>Recent News</p>
      <NewsDisplay news={data} />
    </div>
  );
};

export default App;
