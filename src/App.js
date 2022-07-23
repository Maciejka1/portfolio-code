import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from './components/templates/nav/nav'
import Footer from './components/templates/footer'
import LoadingAnimation from './components/loadingAnimation';
function App() {
 
  return (
    <Router>
      <Nav />
        <LoadingAnimation/>
      <Footer/>
    </Router>
  );
}

export default App;
