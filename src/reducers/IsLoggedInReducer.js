const IsLoggedInReducer = (state = 0, action) => {
  switch (action.type) {
    case 'LOGIN':
      return !state;
    default:
      return state;
  }
};

export default IsLoggedInReducer;
