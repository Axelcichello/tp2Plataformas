import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IconosConocenos from "../components/IconosConocenos";
import BannerHome from "../components/BannerHome";
import MasVendidos from "../components/MasVendidos";
import ListadoPrecios from "../components/ListadoPrecios";

const Home = () => {
  return (
    <div>
      <Header />

      <main>
        <h1 class="titulo">Somos TodoMochilas</h1>
        <IconosConocenos />
      </main>

      <BannerHome />
      <MasVendidos />

      <ListadoPrecios />

      <Footer />
    </div>
  );
};

export default Home;
