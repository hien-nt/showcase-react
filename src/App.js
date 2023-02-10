import './App.css';
import Header from './components/header';
import Article from './components/article';
import Description from './components/descriptions';
import Features from './components/features';
import Teammembers from './components/team-members';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Article/>
      <Description/>
      <Features/>
      <Teammembers/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
