import { v4 as uuid } from "uuid";

const initialState = {
  items: [],
  id: uuid(),
  item: "",
  editItem: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ONCHANGE":
      return {
        ...state,
        item: action.payload.value,
      };
    case "ONCLEAR":
      return {
        ...state,
        items: [],
      };
    case "ONSUBMIT":
      const updatedItems = [...state.items, action.payload.newItem];
      return {
        ...state,
        item: "",
        id: uuid(),
        editItem: false,
        items: updatedItems,
      };
    case "ONDELETE":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: filteredItems,
      };
    case "ONEDIT":
      console.log("ONEDIT");
      const filtereddItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      const selectedItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        items: filtereddItems,
        id: action.payload.id,
        item: selectedItem.title,
        editItem: true,
      };
    default:
      return state;
  }
};
export default reducer;
