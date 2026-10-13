import { useState } from 'react';
import '../css/Page2.css';
import symptomImg from '../images/symptoms-grid.png';
import volteaBg from '../images/voltea-bg.png';

export default function Page2() {
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
          <div className="front text-page2-front">
            <div className="title2-container">
              <h2>PRINCIPALES SIGNOS<br />Y SÍNTOMAS DEL DENGUE</h2>
              <span className="sub-title">Signos iniciales del Dengue</span>
            </div>
            
            <div className="symptom-image-wrapper">
              <img src={symptomImg} alt="뎅기열 주요 증상 4분할" />
            </div>
          </div>

          {/* [뒷면] */}
          <div 
            className="back text-page2-back" 
            style={{ backgroundImage: `url(${volteaBg})` }}
          >
            <h1 className="overlay-title">VOLTEA</h1>
          </div>

        </div>
      </div>
    </div>
  );
}