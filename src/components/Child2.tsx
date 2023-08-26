import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

function Child2() {

    const user = useContext(AppContext);

    const handleName = () => {
        user.setName('name changed from child2')
    }
    return (
        <div>
            <h1>Child2</h1>
            <span>{user.name}</span>
            <button onClick={handleName}>Change from child2</button>
        </div>
    )
}

export default Child2