import React from "react";
import girl2 from '../../../Media/images/girl2.jpg';
import "../../FoodComp/Food.css";

const BookTable = () => {
  return (
    <>
      <div className="row booking-Section">
        <div className="col-12 col-lg-6 col-md-6 mt-4 image1">
            <img src={girl2} class="d-block w-100 pb-4 rounded" alt="..."/>
        </div>


        {/* Book a Table */}
        <div className="col-12 col-lg-5 col-md-5 book-form">
            <h1>Book a table</h1>
            <p>Making a reservation at Gideon's resturant is easy and
                takes just a couple of minutes.
            </p>
        <form className="row g-3">
            <div className="col-12">
            <input type="text" class="form-control rounded-pill" id="inputPassword2" placeholder="Number Of Guest" required/>
            </div>
            <div className="col-6">
            <input type="datetime-local" class="form-control rounded-pill" id="inputPassword2" placeholder="Date" required/>
            </div>
            <div className="col-6">
            <select class="form-select rounded-pill" aria-label="Default select example">
                <option selected>Lauch</option>
                <option value="1">Breakfast</option>
                <option value="2">Brunch</option>
                <option value="3">Dinner</option>
            </select>
            </div>
            <div className="col-12">
            <input type="tel" class="form-control rounded-pill" id="inputPassword2" placeholder="Phone No" required/>
            </div>
            <div className="col-12">
            <textarea type="password" class="form-control" id="inputPassword2" placeholder="Your Message"/>
            </div>
            <button type="submit" class="btn btn-info btn-lg rounded-pill" >Send Request</button>
            {/* <button type="submit" class="btn btn-outline-info  btn-lg" >Send Message</button> */}

           </form>

        </div>
      </div>
    </>
  );
};

export default BookTable;
