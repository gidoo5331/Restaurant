import React from "react";
import Meal from "../Meal";
import BookTable from "../Sections/BookTable";
import Chef from "../Sections/Chef";

const Home = () => {
  return (
    <div>
      <Meal />
      <BookTable />
      <Chef />
    </div>
  );
};

export default Home;
