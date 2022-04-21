import React from 'react'

function Products({products, levels, roles,updateNcomData, ncomData}) {
  
  return (
    <div className='ms_productList mobile_productList'>
    <p className='actionText'>filters <span className='clearAll'>Clear All</span></p>
    <h4 className='msProductCatHeading'>PRODUCTS</h4>
    <div className='productSearch'>
      <input type="search" placeholder='find a product' />
      <span className='serach_icon'>serach</span>
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
      <span className='serach_icon'>serach</span>
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
          <input type="checkbox" value='modules' onClick={(e) => {
            let filterModule = ncomData.filter((item) =>{
              return item.type === "module"
            })
         return updateNcomData(filterModule)
          }}/>
          <label for='modules'>modules</label>
        </summary>
      </details>
      <details  className='productListItem'>
        <summary >
          <input type="checkbox" value='learningPaths' onClick={(e) =>{
              let filterLearningPath = ncomData.filter((item) =>{
                return item.type === "learningPaths"
              })
             return updateNcomData(filterLearningPath)
          }} />
          <label for='learningPaths'>leraning Path</label>
        </summary>
      </details>
    </div>
    
  </div>
  )
}

export default Products