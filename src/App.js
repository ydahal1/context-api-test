import "./App.css";
import Movielist from "./components/Movies";
import Nav from "./components/Nav";
import MovieForm from "./components/MovieForm";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <div className="App__mainContent">
          <div className="App__mainContent__div1">
            <Movielist />
          </div>
          <div>
            <MovieForm />
          </div>
        </div>
      </MovieProvider>
    </div>
  );
}

export default App;
