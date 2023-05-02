import React from 'react';
import '../css/Button.css';

function Button({ filterBySp, Allsp }) {
  const onFilter = (sp) => {
    filterBySp(sp);
  };

  return (
    <div className="conButton">
      <div className="name">
        <div className="specialty" >Spécialités</div>
        <button className="btnSeeAll">Voir Tous</button>
      </div>
      <div className="buttonContainer">
      {
            Allsp.length >= 1? (Allsp.map((sp, index)=>{
              return(
                <button className="btnSp" onClick={()=> onFilter(sp)} key={index}> {sp} </button>
              )
            }
            )) : <h4> rien </h4>
          }
      </div>
    </div>
  );
}

export default Button;
