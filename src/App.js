import './App.css';
import Cards from "./components/cards";
import TagList from "./components/taglist";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

function App() {
  return (
      <div>
          <NavBar/>
          <Counters/>
          <Cards/>
          <TagList/>
      </div>
  );
}

export default App;
