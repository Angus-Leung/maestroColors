import React, { useState } from 'react'
import './Questionaire.css';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import color1 from './assets/color1.png';
import color2 from './assets/color2.png';
import color3 from './assets/color3.png';
import color4 from './assets/color4.png';
import color5 from './assets/color5.png';


const Questionaire = () => {

  const [color, setColor] = useState('');
  const [rating, setRating] = useState(0);
  const [colorCode, setColorCode] = useState('');
  const [imgIndex, setImgIndex] = useState(0);
  const pictureArray = [color1, color2, color3, color4, color5];

  const handleClick = () => {
    console.log("Submitting form to backend/colors-api");
    console.log("Color: " + color);
    console.log("Color code: " + colorCode);
    console.log("Rating: " + rating);

    setColor('');
    setRating(0);
    setColorCode('');
    setImgIndex(Math.floor(Math.random() * 5));
  }

  return (
    <div className="questionaire-container">
      <div className='receipt-image-container'>
        <img src={pictureArray[imgIndex]} alt="colors" className='color-image'/>
      </div>
      <div className='questions-container'>
        <div className='input-form-container'>
          <p>What is this color?</p>
          <TextField
            id="color-helperText"
            label="Color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <p>Enter the color code</p>
          <TextField
            id="colorcode-helperText"
            label="Color Code"
            value={colorCode}
            onChange={(event) => setColorCode(event.target.value)}
          />
          <p>Give this color a rating</p>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Button variant="contained" onClick={handleClick} sx={{ marginTop: '20px'}}>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Questionaire