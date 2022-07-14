import React, { useState } from 'react';
import BizListContainer from './components/BizListContainer';
import Container from './components/Container';
import Pagination from './components/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [appPageAmount, setAppPageAmount] = useState(0);

  return (
    <div className="App">
      <Container>
        <BizListContainer
          setEntirePageAmount={amount => setAppPageAmount(amount)}
          pageNumber={currentPage} 
        />
        <Pagination 
          allPageNumber={appPageAmount}
          currentPage={currentPage}
          setPageNumber={pageNo => setCurrentPage(pageNo)}
        />
      </Container>
    </div>
  );
}

export default App;
