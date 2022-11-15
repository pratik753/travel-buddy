import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (tours = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tours, action.payload];
    case UPDATE:
      return tours.map((post) =>
        tours._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return tours.filter((post) => post._id !== action.payload);
    default:
      return tours;
  }
};
