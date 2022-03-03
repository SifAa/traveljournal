import './style.css';
import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {
  console.log(data);
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="container">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
