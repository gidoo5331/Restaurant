import React from 'react'
import Card from './Card'
import food from "../../../../Media/images/food.jpg"
import l from "../../../../Media/images/l.jpg"
import l1 from "../../../../Media/images/l1.jpg"
import l2 from "../../../../Media/images/l2.jpg"
import l3 from "../../../../Media/images/l3.jpg"
import l4 from "../../../../Media/images/l4.jpg"
import l5 from "../../../../Media/images/l5.jpg"
import l6 from "../../../../Media/images/l6.jpg"
import l7 from "../../../../Media/images/l7.jpg"

const Lunch = () => {
  return (
    <>
     <div className='row'>
          <div className='col col-12 col-lg-4 col-md-6 '>
            <Card image={l} price="200" name="Banku" ingredients="Chicken Fried Rice | Crispy Chicken fry
              Weastern Pickle | Mixed Vegetable " drink="Soft Drinks" />
          </div>
          <div className='col col-12 col-lg-4 col-md-6'>
            <Card image={l1} price="300" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col col-12 col-lg-4 col-md-6'>
            <Card image={l2} price="20" name="Instant Oatmeal With Cranberries"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={l3} price="190" name="avocado toast with egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={l4} price="10" name="Poached Egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={l5} price="600" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={l2} price="90"  name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={l6} price="1" name="Poached Egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={l7} price="70" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>

        </div>


    </>
  )
}

export default Lunch