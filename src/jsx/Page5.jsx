import { useState } from 'react';
import '../css/Page5.css';
import tapaBg from '../images/tapa-bg.png'; 

export default function Page5() {
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
          <div className="front text-page5-front">
            <div className="title5-top">
              <h2>¿QUÉ DEBES HACER<br />SI TIENES DENGUE?</h2>
            </div>

            <div className="dengue-steps">
              <div className="step-item">
                <p>1. Dormir bajo mosquitero.</p>
              </div>

              <div className="step-item">
                <p>2. Reposar en cama.</p>
              </div>

              <div className="step-item">
                <p>3. Tomar líquidos</p>
                <div className="step-sub-list">
                  <span><strong>Adultos:</strong> Tomar líquidos abundantes.</span>
                  <span><strong>Niños:</strong> Tomar líquidos abundantes, leche, jugos de frutas naturales, sales de rehidratación oral.</span>
                </div>
              </div>

              <div className="step-item">
                <p>4. Bajar la fiebre con baños de esponja con agua tibia.</p>
              </div>

              <div className="step-item">
                <p>5. Tomar sólo los medicamentos recetados en el Centro de Salud.</p>
              </div>
            </div>
          </div>

          {/* [뒷면] */}
          <div 
            className="back text-page5-back" 
            style={{ backgroundImage: `url(${tapaBg})` }}
          >
            <h1 className="overlay-title-tapa">TAPA</h1>
          </div>

        </div>
      </div>
    </div>
  );
}