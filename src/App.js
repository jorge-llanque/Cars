import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Layout from './components/Layout'
import CarDetails from "./pages/CarDetails";



function App() {
  return (
    <BrowserRouter className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/cars" component={Cars} />
          <Route exact path="/cars/details" component={CarDetails} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
