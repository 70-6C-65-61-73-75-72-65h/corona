import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Charts from "./pages/Charts/Charts";
import Articles from "./pages/Articles/Articles";

// import CoronaBack from "./assets/corona-header-pattern2.png";

export default function App() {
  return (
    <BrowserRouter>
      <Container
        maxWidth="lg"
        // style={{
        //   position: "relative",
        //   "&::before": {
        //     zIndex: -1,
        //     position: "absolute",
        //     content: `url(${CoronaBack}) `,
        //     opacity: 0.4,
        //   },
        // }}
      >
        <Route exact path={["/*"]} component={Navbar} />
        <Switch>
          <Route exact path={["", "/about"]} component={About} />
          <Route exact path={["/charts"]} component={Charts} />
          <Route exact path={["/articles"]} component={Articles} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
