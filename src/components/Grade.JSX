import React from 'react'

function Grade({grades}) {
  return (
    <div className='GradeCard'>
        {grades.score > 70 ? (<p className='score'>{grades.score}</p>) : (<p className='score2'>{grades.score}</p>)}
    </div>
  )
}

export default Grade