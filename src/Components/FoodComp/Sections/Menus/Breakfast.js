import React from 'react'
import Card from './Card'
import food from "../../../../Media/images/food.jpg"
import bf from "../../../../Media/images/bf.jpg"
import bf1 from "../../../../Media/images/bf1.jpg"
import bf2 from "../../../../Media/images/bf2.jpg"
import bf3 from "../../../../Media/images/bf3.jpg"
import bf4 from "../../../../Media/images/bf4.jpg"
import bf5 from "../../../../Media/images/bf5.jpg"
import bf6 from "../../../../Media/images/bf6.jpg"
import bf7 from "../../../../Media/images/bf7.jpg"

const Breakfast = () => {
  return (
    <>
        <div className='row'>
          <div className='col col-12 col-lg-4 col-md-6 '>
            <Card image={bf} price="200" name="Banku" ingredients="Chicken Fried Rice | Crispy Chicken fry
              Weastern Pickle | Mixed Vegetable " drink="Soft Drinks" />
          </div>
          <div className='col col-12 col-lg-4 col-md-6'>
            <Card image={bf1} price="300" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col col-12 col-lg-4 col-md-6'>
            <Card image={bf2} price="20" name="Instant Oatmeal With Cranberries"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={bf3} price="190" name="avocado toast with egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={bf4} price="10" name="Poached Egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={bf5} price="600" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={bf2} price="90"  name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={bf6} price="1" name="Poached Egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={bf7} price="70" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>

        </div>

    </>
  )
}

export default Breakfast