import { useState } from 'react';
import '../css/Page1.css';
import topLogo from '../images/cover-top-logo.png'; 
import bottomLogo from '../images/cover-bottom-logo.png';

export default function Page1() {
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
          <div className="front text-page-front">
            <div className="logo-top">
              <img src={topLogo} alt="Gobierno de Bolivia" />
            </div>
            
            <div className="title-center">
              <span className="subtitle">¿Qué debes saber del</span>
              <h1>Dengue?</h1>
            </div>

            <div className="logo-bottom">
              <img src={bottomLogo} alt="Creando lazos saludables" />
            </div>
          </div>

          {/* [뒷면] */}
          <div className="back text-page-back">
            <div className="text-content">
              <h2>¿Cómo puedes evitar criaderos del mosquito en tu casa?</h2>
              <p className="sub-habit">Teniendo estos hábitos:</p>
              
              <ul className="vert-list">
                <li><strong className="red-letter">V</strong>oltea</li>
                <li><strong className="red-letter">E</strong>limina</li>
                <li><strong className="red-letter">R</strong>etira</li>
                <li><strong className="red-letter">T</strong>apa</li>
                <li><strong className="red-letter">C</strong>epilla</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}