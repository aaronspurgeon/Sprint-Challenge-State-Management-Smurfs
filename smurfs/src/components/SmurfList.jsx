import React, { useEffect } from 'react';

const SmurfList = ({ item, deleteSmurf }) => {
    // useEffect(() => {
    //     deleteSmurf(item.id)
    // }, [])
    return (
        <div>
            <h3>Name: {item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
            <button onClick={() => deleteSmurf(item.id)}>{`Vote ${item.name} out the village!`}</button>
        </div>
    )
}

export default SmurfList;