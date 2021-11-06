import { Route } from "react-router-dom";
import Home from "./views/home";
import Header from "./components/header/Header";
import Catalog from "./views/catalog";
import Slider from "./components/slider/slider";

function App() {
  return (
    <div className="wrapper">
      <Header className="header container" />
      <Slider />

      <Route path="/" component={Home} exact />
      <Route path="/catalog" component={Catalog} exact />

    </div>
  );
}

export default App;
