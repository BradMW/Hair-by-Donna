import React from "react";

const styles = {
    img: {
        padding: "50px",
        justifyContent: "center",
        backgroundColor: "#ADD5F7",
        display: "grid",
        gridRow: "2/3",
        gridColumn: "2/3"
       
    },
    description: {
        background: '#16193B',
        fontSize: '1rem',
        color: 'white',
        padding: '5px'
    }
}

export default function Services() {

    return(
        <div>
            <ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span className="badge bg-primary rounded-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span className="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
        </div>    
) 
};
