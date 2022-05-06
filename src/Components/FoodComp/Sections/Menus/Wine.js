import React from 'react'
import w from "../../../../Media/images/w.jpg"
import w1 from "../../../../Media/images/w1.jpg"
import w2 from "../../../../Media/images/w2.jpg"
import w3 from "../../../../Media/images/w3.jpg"
import w4 from "../../../../Media/images/w4.jpg"
import w5 from "../../../../Media/images/w5.jpg"
import w6 from "../../../../Media/images/w6.jpg"
import w7 from "../../../../Media/images/w7.jpg"
import Card from './Card'

const Wine = () => {
  return (
    <>
        <div className='row'>
          <div className='col col-12 col-lg-4 col-md-6 '>
            <Card image={w} price="200" name="Banku" ingredients="Chicken Fried Rice | Crispy Chicken fry
              Weastern Pickle | Mixed Vegetable " drink="Soft Drinks" />
          </div>
          <div className='col col-12 col-lg-4 col-md-6'>
            <Card image={w1} price="300" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col col-12 col-lg-4 col-md-6'>
            <Card image={w2} price="20" name="Instant Oatmeal With Cranberries"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={w3} price="190" name="avocado toast with egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={w4} price="10" name="Poached Egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={w5} price="600" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={w2} price="90"  name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={w6} price="1" name="Poached Egg"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <Card image={w7} price="70" name="Avocado toast"  ingredients="Fried Egg | Crispy Chicken fry | Toasted bread
            | Tomato | Ketchup" drink="Soft Drinks"/>
          </div>

        </div>

    </>
  )
}

export default Wine