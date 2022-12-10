import { Exchange } from 'pages/Exchange/Exchange';
import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
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
