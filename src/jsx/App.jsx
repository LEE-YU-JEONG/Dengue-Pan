import { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import '../css/App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    if (currentPage < 6) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="app-container">
      {/* 페이지 컴포넌트 조건부 렌더링 */}
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
      {currentPage === 4 && <Page4 />}
      {currentPage === 5 && <Page5 />}
      {currentPage === 6 && <Page6 />}      

      <div className="guide-text" style={{ marginTop: '15px' }}>
        💡 Toca (haz clic) en la pantalla para voltear la página.
      </div>

      {/* 하단 페이지 전환 버튼 영역 */}
      <div className="controls" style={{ marginTop: '15px' }}>
        <button 
          className="btn" 
          onClick={goToPrevPage} 
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button 
          className="btn" 
          onClick={goToNextPage} 
          disabled={currentPage === 6}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}