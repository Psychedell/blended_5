const myHeaders = new Headers();
myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const converValuteApi = async (to, from, amount) => {
  const resp = await fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  );
  return await resp.json();
};
const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';

export const getPositionLocation = async (lat, lng) => {
  const resp = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
  );

  return await resp.json();
};
