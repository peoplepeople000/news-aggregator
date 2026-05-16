import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { vi } from 'vitest';
import App from './App';
import { getTopHeadlines } from './services/newsApi';

vi.mock('./services/newsApi', () => ({
  getTopHeadlines: vi.fn(),
}));

const renderWithQueryClient = (ui: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

test('renders recent news after loading headlines', async () => {
  vi.mocked(getTopHeadlines).mockResolvedValue([]);

  renderWithQueryClient(<App />);

  expect(await screen.findByText(/recent news/i)).toBeInTheDocument();
});
