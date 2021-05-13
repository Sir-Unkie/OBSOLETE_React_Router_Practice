import { Route, useParams } from 'react-router-dom';
import Comments from '../comments/Comments';

const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
};

export default QuoteDetail;
