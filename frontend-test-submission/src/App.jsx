import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShortenerForm from './components/ShortenerForm';
import StatsPage from './components/StatsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenerForm />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
