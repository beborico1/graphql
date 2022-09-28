import CharacterList from "./pages/CharacterList";
import {Routes, Route} from "react-router-dom"
import "./App.css"
import Character from "./pages/Character";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharacterList/>}/>
        <Route strict exact path="/search" element={<Search/>}/>
        <Route strict exact path="/:id" element={<Character/>}/>
      </Routes>
    </div>
  );
}

export default App;
