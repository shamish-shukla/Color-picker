import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div>
      <button style={{backgroundColor: selectedColor}} onClick={() => setShowColors(!showColors)}>Pick a color</button>
      {showColors && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li key={index} onClick={() => handleColorClick(color)}>
              <div
                className={`color-square ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color, width: '100px' }}
              >{color}</div>
            </li>
          ))}
        </ul>
      )}
      {selectedColor && <p>You picked the color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
