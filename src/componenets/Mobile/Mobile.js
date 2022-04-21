import React from 'react'
import Products from '../Products/Products'
import './Mobile.css'
import MobileProducts from './MobileProducts'
function Mobile ({products, roles, levels,updateMyBtn ,  isOpen }) {
  return (
    <div className='mobile'>
        <MobileProducts products={products} roles={roles} levels={levels} updateMyBtn = {updateMyBtn}  isOpen={isOpen} />
    </div>
  )
}

export default Mobile 