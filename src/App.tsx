import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gateway } from './pages/Gateway';
import { QuizEngine } from './pages/QuizEngine';
import { Outcome } from './pages/Outcome';
import { AccessGuard } from './components/AccessGuard';
import {SecretVault} from './pages/SecretVault'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="/unlock" element={<SecretVault/>}/>
        <Route path="/engine" element={<AccessGuard><QuizEngine /></AccessGuard>} />
        <Route path="/summary" element={<AccessGuard><Outcome /></AccessGuard>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;