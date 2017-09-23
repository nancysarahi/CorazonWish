import React from "react";


function CatDetail(props) {
    const catId = props.match.params.id;
    const cat = props.cats.find(c => c.id == catId) || {};
    return (   
        <div>
          <h3>{cat.name}</h3>
          <h4>{cat.age}</h4>
          <p>{cat.breed}</p>
          <p>{cat.favoriteItem}</p>
          <p>{cat.time}</p>
        </div>
      );
  }

  export default(CatDetail);