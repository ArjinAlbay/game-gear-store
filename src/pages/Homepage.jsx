import React from "react";
import NavigationBar from "../components/NavigationBar";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoriesSection from "../components/CategoriesSection";
import FooterCom from "../components/FooterCom";

function Homepage() {
  return (
    <div>
      <NavigationBar />
      <FeaturedProducts />
      <CategoriesSection />
      <FooterCom />
    </div>
  );
}

export default Homepage;
