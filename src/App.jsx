import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie"
import { MovieProvider } from "./MovieListContext";


function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <div style={{display:"flex", alignItems: "center", justifyContent: "center", marginTop: "2rem"}}>
          <AddMovie></AddMovie>
        </div>
        <MovieList></MovieList>
      </div>
    </MovieProvider>
  );
}

export default App;
