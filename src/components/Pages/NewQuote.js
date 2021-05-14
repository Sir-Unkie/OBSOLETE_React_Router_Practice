import QuoteForm from '../quotes/QuoteForm';
import { useHistory } from 'react-router-dom';

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = quoteDAta => {
    console.log(quoteDAta);
    history.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};

export default NewQuote;
