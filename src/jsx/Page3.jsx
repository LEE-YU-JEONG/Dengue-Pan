import { useState } from 'react';
import '../css/Page3.css';
import alarmImg from '../images/alarm-grid.png';
import eliminaBg from '../images/elimina-bg.png';

export default function Page3() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="content-wrapper">
      <div 
        className={`flip-container ${isFlipped ? 'flipped' : ''}`} 
        onClick={handleFlip}
      >
        <div className="flipper">
          
          {/* [앞면] */}
          <div className="front text-page3-front">
            <div className="title3-container">
              <h2>SIGNOS DE ALARMA<br />DEL DENGUE</h2>
            </div>
            
            <div className="symptom3-image-wrapper">
              <img src={alarmImg} alt="뎅기열 경고 증상" />
            </div>
          </div>

          {/* [뒷면] */}
          <div 
            className="back text-page3-back" 
            style={{ backgroundImage: `url(${eliminaBg})` }}
          >
            <h1 className="overlay-title-clean">ELIMINA</h1>
          </div>

        </div>
      </div>
    </div>
  );
}