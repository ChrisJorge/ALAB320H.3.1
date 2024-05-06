import React from 'react'

function Grade({grades}) {
  return (
    <div className='GradeCard'>
        <p className='score'>{grades.score}</p>
    </div>
  )
}

export default Grade