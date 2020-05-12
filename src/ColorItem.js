import React, { useCallback } from "react";
import { connect } from 'react-redux'
import { clickColor } from './actions'

function ColorItem(props) {
  const handleClickItem = useCallback(() => {
    props.handleClick(props.color);
  }, [props]);

  const itemClass = props.currentColor === props.color ? 'color-item active' : 'color-item';
  return (
	<div
	  className={itemClass}
	  style={{
		backgroundColor: props.color,
	  }}
	  onClick={handleClickItem}
	>
	  {" "}
	</div>
  );
}

const mapStateToProps = state => ({
	currentColor: state.color
  })
  
  const mapDispatchToProps = dispatch => ({
	handleClick: color => dispatch(clickColor(color))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ColorItem)
