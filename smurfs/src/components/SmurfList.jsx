import React from 'react';

const SmurfList = ({ item }) => {
    return (
        <div>
            <h3>Name: {item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
        </div>
    )
}

export default SmurfList;