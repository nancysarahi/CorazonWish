import React from "react";

function KidDetail(props) {
    const kidId = props.match.params.id;
    const kid = props.kids.find(k => k._id == kidId) || {};
    return (   
        <div>
          <h3>Name: {kid.name}</h3>
          <h3>Age: {kid.age}</h3>
          <h3>Parent's Names: {kid.parentsNames}</h3>
          <h3>Siblings: {kid.siblingsInfo}</h3>
          <h3>Favorite Character: {kid.favCharacter}</h3>
          <h3>Arrival Date: {kid.arrivalDate}</h3>
          <h3>Departure Date: {kid.departureDate}</h3>
          <h3>Additional Information: {kid.additionalInfo}</h3>
        </div>
      );
  }

  export default(KidDetail);