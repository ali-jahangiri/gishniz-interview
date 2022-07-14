import React, { useState } from 'react';
import BizListContainer from './components/BizListContainer';
import Container from './components/Container';
import Pagination from './components/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      <Container>
        <BizListContainer pageNumber={currentPage} />
        <Pagination />
      </Container>
    </div>
  );
}

export default App;
