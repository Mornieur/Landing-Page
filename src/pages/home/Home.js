import React from "react";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import Carrossel from "../../components/carrossel/Carrossel";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="section3">
        <Info />
      </section>
      <section className="section2">
        <Banner />
      </section>

      <section className="section3">
        <Carrossel />
      </section>
    </div>
  );
};

export default Home;
