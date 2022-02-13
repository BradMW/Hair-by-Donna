import React from "react";

const styles = {
    div: {
      height: "100%",
      width: "100%",
      marginTop: "120px"
       
    },
    
}

export default function Services() {

    return(
        <div style={styles.div}>
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
