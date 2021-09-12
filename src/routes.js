import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Comics, Characters } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Comics} />
        <Route exact path="/Comics" component={Comics} />
        <Route exact path="/Characters" component={Characters} />
        <Route path="*">
          <h1>404.That's an error.</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
