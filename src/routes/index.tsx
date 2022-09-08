import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import Info from "../pages/Info";
import Projects from "../pages/Projects";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Info />} />
      <Route path="/projetos" element={<Projects />} />
    </Switch>
  );
}

export default Routes;