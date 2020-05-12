import React from 'react';

function TextColor({textColor}) {
  return (
      <div className="text-color" style={{color: textColor}}>
        Hello react hook
      </div>
  );
}

export default TextColor;
