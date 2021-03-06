import React from 'react'
import './MobileProducts.css'
function MobileProducts({products, levels, roles,updateMyBtn, isOpen }) {
    return (
        <div className='mobile_productList'>
        <p className='actionText'>filters <span className='clearAll'>Clear All</span></p>
        <button className='close_filter_btn'
         onClick={() => updateMyBtn(!isOpen)}
        >Close-Filter</button>
        <h4 className='msProductCatHeading'>PRODUCTS</h4>
        <div className='productSearch'>
          <input type="search" placeholder='find a product' />
          <span className='serach_icon'>search</span>
        </div>
        <div className='productsFilter scroll'>
          {products && products.map((item, indx) => {
            return <details className='productListItem' key={item.id}>
              <summary>
                <input type="checkbox" />
                <label>{item.name}</label>
              </summary>
              <ul>
                {
                  item.children?.map((item, indx) => {
                    return <li key={item.id}>
                      <input type="checkbox" />
                      <label>{item.name}</label>
                    </li>
                  })
                }
              </ul>
            </details>
          })}
        </div>
        <hr />
        <h4 className='msProductCatHeading'>ROLES</h4>
        <div className='productSearch'>
          <input type="search" placeholder='find a role' />
          <span className='serach_icon'>search</span>
        </div>
        <div className='role_scroll'>
          {roles && roles.map((item) => {
            return <details key={item.id} className='productListItem' >
              <summary >
                <input type="checkbox" />
                <label for={item.name}>{item.name}</label>
              </summary>
            </details>
          })}
        </div>
        <hr />
        <h4 className='msProductCatHeading'>LEVELS</h4>
        <div className='levelList'>
          {
            levels && levels.map((item) => {
              return <details key={item.id} className='productListItem'>
                <summary >
                  <input type="checkbox" />
                  <label for={item.name}>{item.name}</label>
                </summary>
              </details>
            })
          }
        </div>
        <hr />
        <h4 className='msProductCatHeading'>TYPES</h4>
        <div className='typeList'>
          <details className='productListItem' >
            <summary >
              <input type="checkbox" />
              <label >modules</label>
            </summary>
          </details>
          <details  className='productListItem'>
            <summary >
              <input type="checkbox" />
              <label >leraning Path</label>
            </summary>
          </details>
    
        </div>
      </div>
      )
}

export default MobileProducts
