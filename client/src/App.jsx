import { useState, useEffect } from 'react';


function App() {
  const [items, setItems] = useState([]);  

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((response) => response.json()) 
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error)); 
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>React</h1>
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
