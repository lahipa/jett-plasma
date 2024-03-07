import React from "react";
import Header from "../header";
import Footer from "../footer";

const DefaultLayout = (props) => {
  const { children } = props;
  
  return (
    <main>
      <Header />

      <div id="loading-screen" className="hidden">
        
      </div>

      <div className="relative min-h-screen">
        {children}
      </div>

      <Footer />
    </main>
  );
};

export default DefaultLayout;
