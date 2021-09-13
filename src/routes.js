import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Comics, About } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Comics" component={Comics} />
        <Route exact path="/About" component={About} />
        <Route path="*">
          <h1>404.That's an error.</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
