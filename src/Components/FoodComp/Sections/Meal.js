import React from 'react';
import "../Food.css"
import Breakfast from './Menus/Breakfast';

const Meal = () => {
  // const beak = <Breakfast/>
  return (
    <>
        {/* Meal */}
        <div className='container-fluid row home-menu'>
          <div className='col-3'>
            <div className='row d-grid gap-4'>
              <div className='col-12'>
                <button type='button' className='btn btn-outline-success btn-lg w-100'>Breakfast</button>
              </div>
              <div className='col-12'>
                <button type='button' className='btn btn-outline-success btn-lg w-100'>Lunch</button>
              </div>
              <div className='col-12'>
                <button type='button' className='btn btn-outline-success btn-lg w-100'>Dinner</button>
              </div>
              <div className='col-12'>
                <button type='button' className='btn btn-outline-success btn-lg w-100'>Wine</button>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <Breakfast/>
          </div>

        </div>

    </>
  )
}

export default Meal