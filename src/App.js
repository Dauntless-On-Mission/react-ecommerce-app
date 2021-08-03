import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductListing } from "./pages/ProductListing";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductListing} />
      </Switch>
    </>
  );
}

export default App;
