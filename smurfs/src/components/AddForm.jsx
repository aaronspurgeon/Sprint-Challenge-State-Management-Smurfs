import React, { useState, useEffect } from 'react';
import { createSmurf } from '../actions/smurfs';
import axios from 'axios';

const AddForm = (props) => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');

    const handleChanges = e => {
        setName(e.target.value);
        setHeight(e.target.value);
        setAge(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createSmurf(name, height, age)
    }


    return (
        <div>
            <h2>Add a Smurf to the village</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name of smurf' onChange={handleChanges} />
                <input type="text" name='height' placeholder='Height of smurf' onChange={handleChanges} />
                <input type="text" name='age' placeholder='Age of smurf' onChange={handleChanges} />
                <button>Submit</button>
            </form>
        </div>

    )
}

const mapDispatchToProps = {
    createSmurf
}



export default AddForm;