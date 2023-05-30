import logo from './././assets/logo.png'
import './App.css';

function App() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img className="nav-logo" src={logo} alt="logo" />
        </div>
        <div className="nav-list">
          <ol>
            <li><a className="selected-page" href="/">home</a></li>
            <li><a href="/">waitlist</a></li>
            <li><a href="/">carpool</a></li>
            <li><a href="/">about</a></li>
          </ol>
        </div>
      </div>
      <div className="body">
        <div className="slogan">
          <h1><span>Cruze</span>through</h1>
        </div>
      </div>
    </>
  );
}

export default App;
