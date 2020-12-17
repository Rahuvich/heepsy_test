import "./App.css";
import Appbar from "./components/Appbar";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import Filters from "./pages/Filters";
import Categories from "./pages/Categories";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="text-gray-800 bg-gray-100">
      <Router>
        <div className=" min-h-screen grid-nav-content">
          <Appbar />
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/filters" component={Filters} />
            <Route path="/category/:key" component={Categories} />
            <Route path="/404" component={NotFound} />
            <Redirect
              from="*"
              push
              to={{
                pathname: "/404",
              }}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
