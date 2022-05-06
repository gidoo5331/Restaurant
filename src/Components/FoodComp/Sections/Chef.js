import React from "react";
import { Link } from "react-router-dom";
import chef from "../../../Media/images/chef.jpg";
import chef2 from "../../../Media/images/chef2.jpg";
import chef3 from "../../../Media/images/chef3.jpg";
import chef4 from "../../../Media/images/chef4.jpg";
import chef5 from "../../../Media/images/chef5.jpg";
import chef6 from "../../../Media/images/chef6.jpg";
import Social from "./Social";
import "../Food.css"

const Chef = (props) => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div className="row text-center">
              <div
                class="card chef-card col-6 first-card" style={{backgroundImage:`url(${chef})`,}}
              >
                {/* <img src={chef} class="card-img-top chef-image" alt="..." /> */}
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
              <div class="card chef-card col-6" style={{backgroundImage: `url(${chef6})`,}}>
                {/* <img src={chef6} class="card-img-top chef-image" alt="..." /> */}
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
              <div class="card chef-card col-6" style={{backgroundImage: `url(${chef3})`,}}>
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <div className="row text-center">
              <div class="card chef-card first-card col-6" style={{backgroundImage: `url(${chef4})`,}}>
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
              <div class="card chef-card col-6" style={{backgroundImage: `url(${chef3})`,}}>
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
              <div class="card chef-card col-6" style={{backgroundImage: `url(${chef5})`,}}>
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div className="row">
              <div class="card chef-card first-card col-6" style={{backgroundImage: `url(${chef2})`,}}>
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
              <div class="card chef-card col-6" style={{backgroundImage: `url(${chef})`,}}>
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
              <div class="card chef-card col-6" style={{backgroundImage: `url(${chef2})`,}} >
                <div class="card-body chef-body">
                  <p class="card-text">Gideon Bempong</p>
                  <p class="">Chef Master</p>
                 <Social size="1.4rem" color="#ccbd68" margin="3%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Chef;
