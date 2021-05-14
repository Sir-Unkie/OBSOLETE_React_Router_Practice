import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Zhdi', text: 'My 1st quote' },
  { id: 'q2', author: 'Zhdi', text: 'My 2nd quote' },
  { id: 'q3', author: 'Zhdi', text: 'My 3rd quote' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;
