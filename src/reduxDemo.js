const Buy_dress = "Buy dress";

function BuyDress() {
  return {
    type: Buy_dress,
  };
}
const initialState = {
  numOfDresses: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_dress:
      return { ...state, numOfDresses: state.numOfDresses - 1 };
    default:
      return state;
  }
};
