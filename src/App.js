import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
import { ProductListing } from "./pages/ProductListing";

function App() {
  const state = useSelector(state => state);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductListing} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
