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

export const createSmurf = ({ name, height, age }) => {
  return dispatch => {
    return axios
      .post("http://localhost:3333/smurfs", { name, height, age })
      .then(res => {
        dispatch(createSmurfSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

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
