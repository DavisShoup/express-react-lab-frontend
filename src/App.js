import './App.css';
import { Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';



function App() {

  const URL = "https://express-react-lab-davisshoup.herokuapp.com/"


  return (
    <div className="App">
      <div className="main">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About URL={URL}/>
      </Route>
      <Route path="/projects">
        <Projects URL={URL}/>
      </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
