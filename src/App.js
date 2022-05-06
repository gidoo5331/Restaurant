import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./Components/FoodComp/Pages/ContactUs";
import Footer from "./Components/FoodComp/Footer/Footer";
import Home from "./Components/FoodComp/Pages/Home";
import NavbarComp from "./Components/FoodComp/Navbar/Navbar";
import BookTable from "./Components/FoodComp/Sections/BookTable";
import NoMatch from "./Components/FoodComp/Pages/NoMatch/NoMatch";
import Menu from "./Components/FoodComp/Pages/Menu";
import Breakfast from "./Components/FoodComp/Sections/Menus/Breakfast";
import Lunch from "./Components/FoodComp/Sections/Menus/Lunch";
import Dinner from "./Components/FoodComp/Sections/Menus/Dinner";
import Desserts from "./Components/FoodComp/Sections/Menus/Desserts";
import Drinks from "./Components/FoodComp/Sections/Menus/Drinks";
import Wine from "./Components/FoodComp/Sections/Menus/Wine";
import Card from "./Components/FoodComp/Sections/Menus/Card";
import NavHoc from "./hoc/NavHoc";
import Gallery from "./Components/FoodComp/Pages/Gallery";
import About from "./Components/FoodComp/Pages/About";

function App() {
  return (
    <div className="App">
      {/* <NavHoc/> */}
      {/* <NavbarComp /> */}
      <Routes>
        {/* Food---Food---Food */}
        <Route exact path="/" element={<Home />} />
        <Route path="blog" element={<BookTable />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="card" element={<Card />} />
        {/* <Route path="menu" element={<Menu />} /> */}

         <Route path="/menu" element={<Menu />} >
          <Route index element={<Breakfast />} />
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
          <Route path="desserts" element={<Desserts />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="wine" element={<Wine />} >
          {/* <Route path=":categoryName" element={<Category />} > */}
          {/* Read More */}
          {/* <Route path=":postId" element={<ReadMore />} /> */}
          </Route>
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
