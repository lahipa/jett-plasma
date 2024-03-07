import React from "react";
import Container from "@/components/container";
import Hero from "../Hero";

const HomeWrapper = () => {
  return (
    <>
      <Hero />
      
      <section>
        <Container>
            <p>Section</p>
        </Container>
      </section>
    </>
  );
};

export default HomeWrapper;
