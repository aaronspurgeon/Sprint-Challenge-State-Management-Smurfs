import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const ADD_SMURF = "ADD_SMURF";

export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res, "hello");
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURFS_ERROR, payload: err });
      });
  };
}

export function createSmurf(name, height, age) {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", {
        name: name,
        height: height,
        age: age
      })
      .then(res => {
        dispatch({
          type: ADD_SMURF,
          payload: res.data
        });
      })
      .catch(err => {
        throw err;
      });
  };
}

export const createSmurfSuccess = data => {
  return {
    type: ADD_SMURF,
    payload: {
      _id: data._id,
      name: data.name,
      height: data.height,
      age: data.age
    }
  };
};
