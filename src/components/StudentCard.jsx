import React from 'react'

function StudentCard({student}) {
  return (
    <div>
        <h1 className="Name">{student.name}</h1>
        <div className="container">
            <div className="bio">
                <p>{student.bio}</p>
            </div>
        </div>
        <div className="grades">

        </div>
    </div>
  )
}

export default StudentCard