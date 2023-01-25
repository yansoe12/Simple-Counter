//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//import your own components
import SecondsCounter from "./component/counter.jsx";

// let One= 0;
// let Two =0;
// let Three= 0;
// let Four =0;
// let Five= 0;
// let Six = 0;

// setInterval(()=>{

//     One++;
//       if(One > 9){
//          One = 0;
//         Two++;
//       }
//       if(Two > 9){
//          Two = 0;
//        Three++;
//      }
//      if(Three > 9){
//         Three= 0;
//       Four++;
//     }
//     if(Four > 9){
//         Four = 0;
//        Five++;
//     }
//     if(Five > 9){
//        Five = 0;
//         Six++;
    
    
//     }

// ReactDOM.render(
//     <SecondsCounter Onedigit={One} Seconddigit={Two}  Threedigit={Three} Fourdigit={Four} Fiftdigit={Five} Sixdigit={Six}/>,
//     document.querySelector("#app")
//   );
 
// },1000)


let counter = 0;

    
setInterval (function() {
    const One = Math.floor(counter/1) % 10;
    const Two = Math.floor(counter/10) % 10;
    const Three = Math.floor(counter/100) % 10;
    const Four = Math.floor(counter/1000) % 10;
    const Five = Math.floor(counter/1000) %10;
    const Six = Math.floor(counter/10000) % 10;
    counter++;
        ReactDOM.render(
                    <SecondsCounter Onedigit={One} Seconddigit={Two}  Threedigit={Three} Fourdigit={Four} Fiftdigit={Five} Sixdigit={Six}/>,
                   document.querySelector("#app")
                  );
       },1000);





// //render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
