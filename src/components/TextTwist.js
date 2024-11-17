import React from 'react';

function TextTwist({ mode }) {
    const textStyle = {
        color: mode === 'dark' ? 'white' : '#042743', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        textAlign: 'center',
    };

    return (
        <div 
          className="texttwist-container"
           style={textStyle}
        >
          <div>
            <h1>Welcome to TextTwist</h1>
            <p style={{ marginTop: '20px' }}>Give your text a twist with endless transformations!</p>
          </div>
        </div>
  );
}

export default TextTwist;
