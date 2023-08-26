import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

function Child1() {
    const user = useContext(AppContext);

    const handleName = () => {
        user.setName('name changed from child1')
    }
    return (
        <div>
            <h1>Child1</h1>
            <span>{user.name}</span>
            <button onClick={handleName}>Change from child1</button>
        </div>
    )
}

export default Child1