import logo from "./logo.svg";
import "./App.css";
import ListPostsController from "./components/listPosts/ListPostsController";

function App() {
  return (
    <div className="App">
      <h1>MVC with React</h1>
      <ListPostsController />
    </div>
  );
}

export default App;
