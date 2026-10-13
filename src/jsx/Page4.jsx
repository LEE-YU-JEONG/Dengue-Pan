import { useState } from 'react';
import '../css/Page4.css';
import healthCenterImg from '../images/health-center.png';
import noSelfMedImg from '../images/no-self-medication.png';
import retiraBg from '../images/retira-bg.png'; 

export default function Page4() {
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
          <div className="front text-page4-front">       
            {/* 상단 덩어리: 텍스트 + 이미지 */}
            <div className="content-group">
              <div className="title4-top">
                <h2>
                  <strong>
                      ANTE CUALQUIER SÍNTOMA<br />ACUDE AL CENTRO DE SALUD<br />MÁS CERCANO
                  </strong>    
                </h2>
              </div>
              <div className="img4-top-wrapper">
                <img src={healthCenterImg} alt="Acude al centro de salud" />
              </div>
            </div>

            {/* 하단 덩어리: 텍스트 + 이미지 */}
            <div className="content-group">
              <div className="title4-mid">
                <h2>NO TE AUTOMEDIQUES</h2>
              </div>
              <div className="img4-bottom-wrapper">
                <img src={noSelfMedImg} alt="No te automediques" />
              </div>
            </div>

          </div>

          {/* [뒷면] */}
          <div 
            className="back text-page4-back" 
            style={{ backgroundImage: `url(${retiraBg})` }}
          >
            <h1 className="overlay-title-retira">RETIRA</h1>
          </div>

        </div>
      </div>
    </div>
  );
}