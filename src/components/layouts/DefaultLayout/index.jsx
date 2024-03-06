import React from "react";

const DefaultLayout = (props) => {
  const { children } = props;
  
  return (
    <main>
      <header>Header</header>

      <div>{children}</div>

      <footer>Footer</footer>
    </main>
  );
};

export default DefaultLayout;
