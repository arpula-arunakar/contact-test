import React from "react";
import Navbar from "components/Navbar";
import AppRoutes from "routes/Routes";
import "assets/style/styles.css";
import Breadcrumbs from "components/Breadcrumb";
function App() {
  return (
      <>
        <Navbar />
        <Breadcrumbs />
        <AppRoutes />
      </>
  );
}

export default App;
