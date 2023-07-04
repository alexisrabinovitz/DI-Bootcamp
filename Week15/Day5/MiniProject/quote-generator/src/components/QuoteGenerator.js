import React, { useState } from 'react';
import quotes from './quotes'; // Import the quotes array

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('');
  const [quoteColor, setQuoteColor] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  const getRandomQuote = (quoteList) => {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    return quoteList[randomIndex];
  };

  const getRandomColor = () => {
        const hexChars = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
        ];

        const hexIndices = Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 16)
        );
        // Map each index to its corresponding hex digit and join them into a string
        const hexCode = hexIndices.map((i) => hexChars[i]).join('');
        // Return the string with a "#" prefix
        return `#${hexCode}`;
      }

  const generateNewQuote = () => {
    const currentQuotes = [...quotes]; // Create a copy of the quotes array
    if (currentQuotes.length === 0) {
      setQuote(quotes[0]); // Reset the quote to the first one in the original quotes
    } else {
      const randomQuote = getRandomQuote(currentQuotes);
      setQuote(randomQuote);
    }
    setBackgroundColor(getRandomColor());
    setQuoteColor(getRandomColor());
    setButtonColor(getRandomColor());
  };

    return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "1rem",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: quoteColor }}>{quote.quote}</h1> 
      <p style={{ color: "white" }}>{quote.author}</p>
      <button
        style={{ backgroundColor: buttonColor, color: "white", padding: "0.5rem 1rem" }}
        onClick={generateNewQuote}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;