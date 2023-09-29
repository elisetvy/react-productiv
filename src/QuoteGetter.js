import { useState, useEffect } from 'react';

const RANDOM_INSPIRATIONAL_QUOTE_URL =
"https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteGetter() {
  const [quote, setQuote] = useState(null);
  console.log(quote, "LOGGING THERE")

  const fetchInfo = () => {
    return fetch(RANDOM_INSPIRATIONAL_QUOTE_URL)
    .then((res) => res.json())
    .then((d) => setQuote(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
      <p>{quote.quote.text}</p>
  )
}

export default QuoteGetter;