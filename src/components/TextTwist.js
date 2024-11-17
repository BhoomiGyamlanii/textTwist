import React from 'react';

function TextTwist() {
    return (
        <div 
          className="texttwist-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
            textAlign: 'center',
          }}
        >
          <div>
            <h1>Welcome to TextTwist</h1>
            <p style={{ marginTop: '20px' }}>Give your text a twist with endless transformations!</p>
          </div>
        </div>
  );
}

export default TextTwist;
