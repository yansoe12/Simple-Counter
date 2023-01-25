import React from "react";


const SecondsCounter=(props)=>{

    return (<div className="container text-center rounded-3" >
    <div className="row row-cols-auto bg-dark d-flex justify-content-center gap-3 rounded-3" style={{height: "100px", marginTop: "200px"}}>
      <div className="col-1 bg-secondary text-white rounded-3" style={{fontSize: "4em"}}><i className="far fa-clock"></i></div>
      <div className="col-1 bg-secondary text-white rounded-3" style={{fontSize: "4em"}}>{props.Onedigit}</div>
      <div className="col-1 bg-secondary text-white rounded-3" style={{fontSize: "4em"}}>{props.Seconddigit}</div>
      <div className="col-1 bg-secondary text-white rounded-3" style={{fontSize: "4em"}}>{props.Threedigit}</div>
      <div className="col-1 bg-secondary text-white rounded-3" style={{fontSize: "4em"}}>{props.Fourdigit}</div>
      <div className="col-1 bg-secondary text-white rounded-3" style={{fontSize: "4em"}}>{props.Fiftdigit}</div>
      <div className="col-1 bg-secondary text-white rounded-3" style={{fontSize: "4em"}}>{props.Sixdigit}</div>
    </div>
  </div>)
}


export default SecondsCounter