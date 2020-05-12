import React from 'react';
import './App.css';
import ColorWrapper from './ColorWrapper';
import TextColor from './TextColor';
import { connect } from 'react-redux'

const colors = ['red', 'blue', 'green', 'brown', 'violet']

function App(props) {
  return (
    <div className="App">
      <ColorWrapper colors={colors} textColor={props.textColor}/>
      <TextColor textColor={props.textColor}/>
    </div>
  );
}

const mapStateToProps = state => ({
	textColor: state.color
})

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App)
