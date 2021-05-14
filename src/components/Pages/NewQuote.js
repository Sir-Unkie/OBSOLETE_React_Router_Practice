import QuoteForm from '../quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = quoteDAta => {
    console.log(quoteDAta);
  };
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};

export default NewQuote;
