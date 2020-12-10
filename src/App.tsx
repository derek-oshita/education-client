import React from 'react';
import { TextField } from './TextField'; 
import Home from './components/Home/Home'; 

// function App() {
//   return (
//     <div className="App">
//       < TextField />
//     </div>
//   );
// }

const App: React.FC = () => {
  return <div className="home-container container">
    <Home />
    <TextField />
  </div>;
}

export default App;
