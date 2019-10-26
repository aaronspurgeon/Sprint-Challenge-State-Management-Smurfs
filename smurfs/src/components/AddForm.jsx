import React, { useState } from 'react';
import { createSmurf, fetchSmurfs } from '../actions/smurfs';
import { connect } from "react-redux";

const AddForm = (props) => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');

    const handleNameChanges = e => {
        setName(e.target.value);

    }
    const handleHeightChanges = e => {
        setHeight(e.target.value);

    }
    const handleAgeChanges = e => {
        setAge(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createSmurf(name, height, age)
        setAge('');
        setName('');
        setHeight('');
    }


    return (
        <div>
            <h2>Add a Smurf to the village</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={name} placeholder='Name of smurf' onChange={handleNameChanges} />
                <input type="text" name='height' value={height} placeholder='Height of smurf' onChange={handleHeightChanges} />
                <input type="text" name='age' value={age} placeholder='Age of smurf' onChange={handleAgeChanges} />
                <button>Submit</button>
            </form>
        </div>

    )
}

const mapDispatchToProps = {
    createSmurf,
    fetchSmurfs
}



export default connect(null, mapDispatchToProps)(AddForm);