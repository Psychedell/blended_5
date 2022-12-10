import { Exchange } from 'pages/Exchange/Exchange';
import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useEffect, useState } from 'react';

import { getPositionLocation } from 'services/service';
export const App = () => {
  const [currency, setCurrency] = useState('USD');
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      // const crd = pos.coords;

      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
      getPositionLocation(pos.coords.latitude, pos.coords.longitude).then(
        data => setCurrency(data.results[0].annotations.currency.iso_code)
      );
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
        </Route>
      </Routes>
    </div>
  );
};
