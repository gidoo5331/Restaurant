import React from 'react';
import food from '../../../../Media/images/food.jpg'

const Card = (props) => {
  return (
    <div>
        <div className="card" style={{ height: "35rem" }}>
            <img
              src={food}
              className="card-img"
              style={{ height: "50%" }}
              alt="..."
              />
            <div className="card-body">
              <h5 className="food-title"> Weastern Set Meal 01</h5>
              <p className="food-text text-start">Chicken Fried Rice | Crispy Chicken fry
Weastern Pickle | Mixed Vegetable Soft Drinks </p>
              <p className="">bdbksbkjsdj</p>
                <div className="text-start fw-light align-bottom">
                <button type="button" class="btn btn-primary">Order Now!</button>
                </div>
            </div>

          </div>

    </div>
  )
}

export default Card