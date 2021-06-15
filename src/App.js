import './App.css';
import Cards from "./components/cards";
import TagList from "./components/taglist";
import Counters from "./components/counters";

function App() {
  return (
      <div>
          <Counters/>
          <Cards/>
          <TagList/>
      </div>
  );
}

export default App;
