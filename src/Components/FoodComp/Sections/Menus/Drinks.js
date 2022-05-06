import React from 'react'
import food from "../../../../Media/images/food.jpg"
import d from "../../../../Media/images/d.jpg"
import d1 from "../../../../Media/images/d1.jpg"
import d2 from "../../../../Media/images/d2.jpg"
import d3 from "../../../../Media/images/d3.jpg"
import l1 from "../../../../Media/images/l1.jpg"
import l2 from "../../../../Media/images/l2.jpg"
import bf2 from "../../../../Media/images/bf2.jpg"
import d7 from "../../../../Media/images/d1.jpg"
import Card from './Card'

const Drinks = () => {
  return (
    <>
      <div className='row'>
          <div className='col col-12 col-lg-4 col-md-6 '>
            <Card image={d} price="200" name="Banku" ingredients="Chicken Fried Rice | Crispy Chicken fry
              Weastern Pickle | Mixed Vegetable " drink="Soft Drinks" />
          </div>
          <div className='col col-12 col-lg-4 col-md-6'>
            <Card image={d1} price="300" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col col-12 col-lg-4 col-md-6'>
            <Card image={d2} price="20" name="Instant Oatmeal With Cranberries"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={d3} price="190" name="avocado toast with egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={bf2} price="10" name="Poached Egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={l2} price="600" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={d2} price="90"  name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={bf2} price="1" name="Poached Egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={d7} price="70" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>

        </div>

    </>
  )
}

export default Drinks