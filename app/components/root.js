import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CandyList } from "./CandyList";
import { getServerCandies } from "../store";
import { connect } from "react-redux";
import { Home } from "./Home";
import { Nav } from "./Nav";

class DCRoot extends React.Component {
  componentDidMount() {
    this.props.sync();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <main>
                <Route exact path="/" component={Home} />
                <Route path="/candy" component={CandyList} />
              </main>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const syncStoreToServer = disptach => ({
  sync: () => disptach(getServerCandies())
});

const Root = connect(
  null,
  syncStoreToServer
)(DCRoot);

export { Root };
