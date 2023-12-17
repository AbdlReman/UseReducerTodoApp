import React, { useReducer, useState } from "react";
import Singlename from "./Singlename";
import { reducer } from "./reducer,";

const Reducer = () => {
  const [name, setName] = useState("");
  // create an initial State

  const initialState = {
    names: [],
    error: false,
    success: false,
    message: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //dispatch function fire karay ga reducer kay pass ga kay ,,is ka kam ha bs pank dena reducer kay pass

  const handleClick = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "EMPTY" });
    } else {
      dispatch({ type: "ADD", payload: { id: Date.now(), name } });
    }

    setTimeout(() => {
      dispatch({ type: "REMOVE" });
    }, 3000);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  //   const removedata = (id) => {
  //     let newdata = state.names.filter((n) => {
  //       return n.id !== id;
  //     });}

  return (
    <>
      <div className="container col-lg-5 m-auto shadow p-4">
        <form>
          <h1 className="text-center display-3">Add Name</h1>
          <label htmlFor="">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />

          {state.error && (
            <p className="text-danger fw-bold">{state.message}</p>
          )}
          {state.success && (
            <p className="text-danger fw-bold">{state.message}</p>
          )}

          <button onClick={handleClick} className="btn btn-dark my-2 w-100">
            Add Name
          </button>
        </form>
      </div>
      <div className="container col-lg-9 row mx-auto my-4">
        {state.names.map((n) => {
          return <Singlename key={n.id} {...n} remove={handleDelete} />;
        })}
      </div>
    </>
  );
};

export default Reducer;
