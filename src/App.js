import Button from './components/Button'
import Grid from './components/Grid'
import './App.css';


function App() {
  return (
    <div className="app">
      
      <header className="header">
          
        <Button text='Choose Algorithm' id='0'/>
        <Button text='Start Node' id='1'/>
        <Button text='End Node' id='2'/>
        <Button text='Start Pathfinding' id='3'/>
          
      </header>
      <div>
        <Grid row={0}/>
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
      
    </div>
  );
}

export default App;
