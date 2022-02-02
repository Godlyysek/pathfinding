import Button from './components/Button'
import Grid from './components/Grid'
import './App.css';


function App() {
  return (
    <div className="app">
      
      <header className="header">
      
      <button className='btn btn-top' id='start'>Pick Start Node</button>  
      <button className='btn btn-top' id='end'>Pick End Node</button>  
      <button className='btn btn-top' id='launch'>START</button>  
          
      </header>

      <div>
        <Grid row={0} id='zero'/>
        <Grid row={1}/>
        <Grid row={2}/>
        <Grid row={3}/>
        <Grid row={4}/>
        <Grid row={5}/>
        <Grid row={6}/>
        <Grid row={7}/>
        <Grid row={8}/>
        <Grid row={9}/>
        
      </div>
      <script src="./components/chooseStartNode"></script>
    </div>
    
  );
}

export default App;
