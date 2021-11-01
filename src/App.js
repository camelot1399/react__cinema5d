import { Route } from "react-router-dom";
import Home from "./views/home";
import Header from "./components/header";
import Catalog from "./views/catalog";

function App() {
  return (
    <div className="wrapper">
      <Header className="header container" />

      <Route path="/" component={Home} exact />
      <Route path="/catalog" component={Catalog} exact />

    </div>
  );
}

export default App;
