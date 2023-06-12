import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Waitlist from "./pages/Waitlist";
import Carpool from './pages/Carpool';
import About from './pages/About';
import Home from './pages/Home';



function App() {
  return (
    
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/waitlist" element={<Waitlist/>} />
          <Route exact path="/carpool" element={<Carpool/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes> 
      </Router>
  );
}


export default App;
// {/* <div className="nav">
//   <div className="logo">
//     <img className="nav-logo" src={logo} alt="logo" />
//   </div>
//   <div className="nav-list">
//     <ol>
//       <li><a className="selected-page" href="/">home</a></li>
//       <li><a href={{Waitlist}}>waitlist</a></li>
//       <li><a href="/">carpool</a></li>
//       <li><a href="/">about</a></li>
//     </ol>
//   </div>
// </div>
// <div className="body">
//   <div className="section1">
//     <div className="title">
//       <div className="slogan">
//         <h1>Cruze</h1>
//         <p className="titletxt">through</p>
//       </div>
//       <div className="slogan">
//         <p className="titletxt">your</p>
//         <h1>routes</h1>
//       </div>
//       <div className="info">
//         <p className="info">Welcome to <span>Cruze</span>, the carpooling application designed </p>
//         <p className="info">specifically for the new age. </p>
//         <p className="info">Say goodbye to your daily commute woes and hello to a </p>
//         <p className="info">smarter, more sustainable way to travel.</p>
//       </div>
//     </div>
//     <div>
//       <iframe className="spline-logo" src='https://my.spline.design/untitled-5bbcaff412eec1d5dde9cdd87f4ce2cc/' frameborder='0' width='100%' height='100%'></iframe>
//     </div>
//   </div>
//   <div className="downarrow">
//     <a href="/">
//       <DownArrow className="downarrow" style={{ fontSize: "60px" }} />
//     </a>
//   </div>
// </div>
// </> */}
