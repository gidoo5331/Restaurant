import React from 'react';
import food from '../../../../Media/images/food.jpg'
import "../../Food.css"

const Card = (props) => {
  return (
    <>
        <div className="card card-b mb-4">
          {/* <div className="card-img food-img" style={{backgroundImage: `url(${food})`}}> */}
          <div className="card-img food-img" style={{backgroundImage: `url(${props.image})`}}>
          <p className='food-price'><sup>$</sup>{props.price}</p>
          </div>
            <div className="card-body">
              {/* <h5 className="food-title"> Weastern Set Meal 01</h5> */}
              <h5 className="food-title"> {props.name}</h5>
              <p className="food-text ingredients text-start">{props.ingredients}</p>
              <p className="drinks">{props.drink}</p>
                <div className="text-start fw-light align-bottom">
                <button type="button" class="btn btn-primary">Order Now!</button>
                </div>
            </div>

          </div>

    </>
  )
}

export default Card