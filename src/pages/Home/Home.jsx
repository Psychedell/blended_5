import { useEffect, useState } from 'react';

import { converValuteApi } from 'services/service';
export const Home = () => {
  const [input, setInput] = useState([]);
  const [convertValue, setConvertValue] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    const inputValue = e.target.elements.currency.value;

    setInput(inputValue.split(' '));

    e.target.reset();
  };

  useEffect(() => {
    if (input.length === 0) {
      return;
    }
    converValuteApi(input[3], input[1], input[0]).then(data =>
      setConvertValue(data.result)
    );
  }, [input]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="currency" />
        <button type="submit">Convertation</button>
      </form>
      <h1>convert value: {convertValue}</h1>
    </div>
  );
};
