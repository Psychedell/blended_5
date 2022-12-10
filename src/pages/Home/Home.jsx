import { useState } from 'react';

export const Home = () => {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const inputValue = e.target.elements.currency.value;

    setInput(inputValue);

    e.target.reset();
  };

  console.log(input.split(' ')[1]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="currency" />
        <button type="submit">Convertation</button>
      </form>
    </div>
  );
};
