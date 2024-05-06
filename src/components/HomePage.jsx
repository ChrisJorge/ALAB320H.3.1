import React from 'react'
import StudentCard from './StudentCard'
function HomePage({data}) {
  return (
    <div>

        {data.map((student, i) => {
            return <StudentCard key = {i} student = {student}/> 
        })}
    </div>
  )
}

export default HomePage