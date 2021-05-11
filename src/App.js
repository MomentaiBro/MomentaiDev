import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Blog from "./components/Blog";
import Project from "./components/Project";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Blog} path='/blog' />
        <Route component={Project} path='/project' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
