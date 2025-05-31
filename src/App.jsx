import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [colour, setColour] = useState('white');
  const [text, setText] = useState('Mouse over me.');

  const toggleColour = () => {
    setColour(prev => (prev === 'white' ? 'black' : 'white'));
  };

  useEffect(() => {
    document.body.style.backgroundColor = colour;
  }, [colour]);

  const isDarkMode = colour === 'black';

  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
  };

  const hrStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#ffc33a' : '#3ac3ff',
  }

  const infoText = () => {
    setText('Click on the button below to switch screen modes.');
  };

  const returnText = () => {
    setText('Mouse over me.');
  };


  return (
    <>
      <h1 onClick={toggleColour} style={textStyle}>Mission 1:</h1>
      <p 
        className='container'
        onMouseEnter={infoText} 
        onMouseLeave={returnText} 
        style={textStyle}
      >
        {text}</p>
      <hr style={hrStyle}/>
      <br />
      <button onClick={toggleColour} style={buttonStyle}>
        {colour === 'white' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <p style={textStyle}>
        The Screen is Now in {colour === 'white' ? 'Light' : 'Dark'} Mode
      </p>
    </>
  );
}

export default App;
