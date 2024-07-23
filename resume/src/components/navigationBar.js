// import React, { useState, useEffect}from "react";
// import './navigationBar.css';

// function NavigationBar() {

//   const [circles, setCircles] = useState([]);

//   const handleClick = (e) => {
//     const newCircle = {
//       x: e.clientX - 25,
//       y: e.clientY - 25,
//       id: new Date().getTime(),
//     };


//   }

//   return (
//     <div>
//         <div className="NavBar">
//             <p>Home</p>
//             <p>Education</p>
//             <p>Projects</p>
//             <p>Skills</p>
//             <p>Contact</p>
//         </div>
//     </div>
//   );
// }

// export default NavigationBar;

import React, { useState, useEffect } from "react";
import './navigationBar.css';

function NavigationBar() {
  const [circles, setCircles] = useState([]);

  const handleClick = (e) => {
    const newCircle = {
      x: e.clientX - 25,
      y: e.clientY - 25,
      id: new Date().getTime(),
    };
    setCircles((prevCircles) => [...prevCircles, newCircle]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCircles((prevCircles) => prevCircles.slice(1));
    }, 400);

    return () => clearInterval(timer);
  }, [circles]);

  return (
    <div className="App" onClick={handleClick}>
      <div className="NavBar">
        <p>Home</p>
        <p>Education</p>
        <p>Projects</p>
        <p>Skills</p>
        <p>Contact</p>
      </div>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="click-circle"
          style={{ left: circle.x, top: circle.y, width: '50px', height: '50px' }}
        />
      ))}
    </div>
  );
}

export default NavigationBar;
