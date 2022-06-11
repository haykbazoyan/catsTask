/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { INCREMENT, ADD_DATA } from "./redux/types";
import "./App.css";

const Cats = (props) => {
  const [urlData, setUrlData] = useState("");

  // useEffect(() => {
  //   return setUrlData(
  //     props.data.map((el) => {
  //       <img src={el} alt="catImage" />;
  //     })
  //   );
  // }, [props.data]);

  console.log("url:: ", props.data);

  return (
    <div>
      <button className="btn" onClick={props.onIncrementCount}>
        {props.count} Count
      </button>
      <button className="btn" onClick={props.addData}>
        Add Data
      </button>
      <div>{urlData}</div>
    </div>
  );
};

const mapSateToProps = (state) => {
  return {
    count: state.count,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCount: () => {
      const action = {
        type: INCREMENT,
      };
      dispatch(action);
    },
    addData: () => {
      const action = {
        type: ADD_DATA,
      };
      dispatch(action);
    },
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Cats);
