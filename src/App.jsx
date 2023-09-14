// import logo from './logo.svg';
import './App.css';

function App({name, animal, color, imgSrc}) {
  return (
    <div className="card" style={{backgroundColor : `${color}`}}>
      <img src={`${imgSrc}`} alt="" className ={name} />
      <div className="explanation">
        <h1>{name}</h1>
        <h2>{animal}</h2>
      </div>
    </div>
  );
}

export default App;
