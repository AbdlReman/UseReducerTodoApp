export const reducer = (state, action) => {
    if (action.type === "EMPTY") {
      return {
        ...state,
        error: true,
        message: "Please enter a value",
      };
    } else if (action.type === "REMOVE") {
      return {
        ...state,
        error: false,
        success: false,
        message: "",
      };
    } else if (action.type === "ADD") {
      return {
        ...state,
        success: true,
        message: "Data Insert Successfully",
        names: [...state.names, action.payload],
      };
    }else if (action.type === "DELETE") {
        const updatedNames = state.names.filter((n) => n.id !== action.payload);
        return {
          ...state,
          names: updatedNames,
        };
      }
    return state;
  };