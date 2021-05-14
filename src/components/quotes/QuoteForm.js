import React, { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = props => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isTouched, setIsTouched] = useState(false);
  const focusHandler = () => {
    setIsTouched(true);
  };
  const finishEnteringHandler = e => {
    e.preventDefault();
    setIsTouched(false);
  };
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <React.Fragment>
      <Prompt
        when={isTouched}
        message={() => 'Are u sure u wanna leave?All data will be lost!'}
      ></Prompt>
      <Card>
        <form
          onFocus={focusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
