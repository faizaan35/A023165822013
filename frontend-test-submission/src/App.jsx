import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShortenerForm from './components/ShortenerForm';
import Statistics from './components/Statistics';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenerForm />} />
        <Route path="/stats" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}
