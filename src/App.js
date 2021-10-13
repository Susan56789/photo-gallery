import React from 'react';
import './App.css';
import Title from './components/Title';
import Upload from './components/uploadForm';
import Grid from './components/imageGrid';


const App =() => {
return (
    <div className="app">
<Title />
<Upload />
<Grid />

    </div>
  );
}

export default App;
