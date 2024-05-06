import React from 'react'

function Grade({grades}) {
  return (
    <div className='GradeCard'>
        {grades.score > 70 ? (<p className='score'>{grades.score}  </p>) : (<p className='score2'>{grades.score}</p>)}
        {grades.date >= '2019-01-01' ? (<p className='date'>{grades.date} </p>) : (<p className='date2'>{grades.date}</p>)}
    </div> 
  )
}

export default Grade