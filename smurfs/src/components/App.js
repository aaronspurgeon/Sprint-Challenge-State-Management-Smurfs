import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, createSmurf, deleteSmurf } from "../actions/smurfs";
import SmurfList from "./SmurfList";
import AddForm from "./AddForm";
import "./App.css";

function App(props) {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <h2>
        Welcome to the Smurf Village! Below you will find a list of all the
        residents!
      </h2>
      {props.smurfArray.map(item => (
        <SmurfList item={item} key={item.id} deleteSmurf={props.deleteSmurf} />
      ))}
      <AddForm />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfArray: state.smurfArray,
    isLoading: state.isLoading,
    error: state.error
  };
}

const mapDispatchToProps = {
  fetchSmurfs,
  createSmurf,
  deleteSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
