import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import ArticlesList from './pages/ArticlesList'
import NotFoundPage from './pages/NotFound'
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar className="navbar navbar-expand-lg bg-body-tertiary"/>
      <div id="page-body">
        <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/articles" element={<ArticlesList/>} />
      <Route path="/articles/:articleId" element={<Article/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/create-account" element={<CreateAccount/>} />
      <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

