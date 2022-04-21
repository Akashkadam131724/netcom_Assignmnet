import React from 'react'
import './ResultCard.css'
function ResultCard({ item }) {
  return (
    <div className='myResultCard'>
      <div className='cardeHeader'>{item.type}</div>
      <img src={item.icon_url} alt="logo" className='module_logo' />
      <ul className='cardContent'>
        <li><a href="#">{item.title}</a></li>
      </ul>
      <ul className='courseDuration'>
        <li className='my_icon'>icon</li>
        <li>Duration in minutes : <span>{item.duration_in_minutes}</span></li>
      </ul>
      <ul className='productList'>
        {
          item.products?.map((item, indx) => {
            return <li key={indx}> {item}</li>
          })
        }
      </ul>
    </div>
  )

}

export default ResultCard