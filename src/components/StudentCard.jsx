import React from 'react'
import Grade from './Grade.jsx'
function StudentCard({student}) {
  return (
    <div>
        <h1 className="Name">{student.name}</h1>
        <div className="container">
            <div className="bio">
                <p>{student.bio}</p>
            </div>
            <div className="grades">
                {student.scores.map((score, i) => {

                    return <Grade key = {i} grades = {score}/> 
                })}
        </div>
        </div>
    </div>
  )
}

export default StudentCard