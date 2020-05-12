const color = (state = 'red', action) => {
    switch (action.type) {
      case 'CLICK_COLOR':
        return action.color;
      default:
        return state
    }
  }
  
  export default color