import './App.css';
import Main from './components/Main/Main';
import Contact from "./components/Contacts/Contacts";
import Skills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
        <Main />
        <Skills />
        <Projects />
        <Contact/>
    </div>
  );
}

export default App;
