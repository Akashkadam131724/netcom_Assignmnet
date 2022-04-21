import React, { useState,useRef, useEffect } from 'react'
import ResultCard from '../ResultCard/ResultCard'
function CourseCard({ ncomData, setNcomData, updateMyBtn, setIsOpen, isOpen }) {
  // const [temp, setTemp] = useState([])
  // console.log(temp);
  
 
  return (
    <div className='ms_Course_Card'>
      <div className='row'>
        <div className='col_6'>
          <p className='total_Value'>{ncomData.length} RESULTS</p>
        </div >
        <div className='col_6 msProductsSearch'>
          <span className='mysearch_icon'>serach</span>
          <input type="search" className='msProductsSearch_input' />
          <button className='filter_btn'
            onClick={() => updateMyBtn(!isOpen)}
          >Filters</button>
        </div>
      </div>
      <div className='results'>
        <div className='my_results'>
          {
            ncomData && ncomData.slice(0,20).map((item, indx) => {
              return <ResultCard item={item} key={indx} />
            })
          }
        </div>
      </div>
      <div className='load_more_container'>
        <button className='load_more_btn'  
        
        >Load More</button>
      </div>
    </div>
  )
}

export default CourseCard