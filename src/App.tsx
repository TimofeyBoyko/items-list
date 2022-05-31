import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import useRoutes from "./routes";

import Layout from "./common/Layout";
import Section from "./common/Section";

const App = () => {
  const Routes = useRoutes();

  return (
    <Router>
      <Layout>
        <Section>{Routes}</Section>
      </Layout>
    </Router>
  );
};

export default React.memo(App);
