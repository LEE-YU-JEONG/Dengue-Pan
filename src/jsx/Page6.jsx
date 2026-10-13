import { useState } from 'react';
import '../css/Page6.css';
import cepillaBg from '../images/cepilla-bg.png';

export default function Page6() {
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
          
          {/* [앞면] 뎅기열 경고 징후 및 긴급 안내 텍스트 */}
          <div className="front text-page6-front">
            <div className="title6-top">
              <h2>SI PRESENTAS LOS SIGUIENTES<br />SIGNOS DE ALARMA:</h2>
            </div>

            <div className="alarm-list">
              <div className="alarm-item highlight">
                • Dolor de estómago.
              </div>
              <div className="alarm-item">
                • Vómitos (ojo: más de 3 en 1 hora o más de 5 en 6 horas).
              </div>
              <div className="alarm-item">
                • Sangrados (Nariz, encías, aumento del periodo menstrual, sangre en orina o en heces, vómitos con sangre).
              </div>
              <div className="alarm-item">
                • Sueño o mal genio, desmayos, ataques.
              </div>
              <div className="alarm-item">
                • Manos o piel pálidas, frías y húmedas.
              </div>
              <div className="alarm-item">
                • Dificultad para respirar.
              </div>
              <div className="alarm-item">
                • No tener ganas de orinar.
              </div>
            </div>

            <div className="alarm-footer-alert">
              <h3>¡ACUDE AL CENTRO DE SALUD INMEDIATAMENTE!</h3>
            </div>
          </div>

          {/* [뒷면] 전체 배경 일러스트 + CEPILLA 텍스트 */}
          <div 
            className="back text-page6-back" 
            style={{ backgroundImage: `url(${cepillaBg})` }}
          >
            <h1 className="overlay-title-cepilla">CEPILLA</h1>
          </div>

        </div>
      </div>
    </div>
  );
}