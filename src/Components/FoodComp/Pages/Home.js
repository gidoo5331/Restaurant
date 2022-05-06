import React from "react";
import Meal from "../Meal";
import JumboText from "../Navbar/JumboText";
import BookTable from "../Sections/BookTable";
import Chef from "../Sections/Chef";

const Home = () => {
  return (
    <div>
      <JumboText
        top="FEEL AT HOME AND ENJOY"
        title="Treat Yourself"
        text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      />
      <Meal />
      <BookTable />
      <Chef />
    </div>
  );
};

export default Home;
