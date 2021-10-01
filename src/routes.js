import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Comics, About, Search } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comics" component={Comics} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route path="*">
          <h1>404.That's an error.</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
