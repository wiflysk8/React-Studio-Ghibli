import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from './core/Header';
import HomePage from './pages/HomePage/HomePage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import FilmDetailPage from './pages/FilmsPage/FilmDetailPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/films/:id" element={<FilmDetailPage />} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
