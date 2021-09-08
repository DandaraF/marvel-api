import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Teste } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teste" component={Teste} />
        <Route path="*">
          <h1>404.That's an error.</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
