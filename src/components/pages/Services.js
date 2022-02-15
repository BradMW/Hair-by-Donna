import React from "react";

const styles = {
    div: {
      height: "100%",
      width: "100%",
      marginTop: "120px"
      
    },
    img: {
      width: "80%",
      paddingRight: "20px",
      margin: "10px"
  },
    
}

export default function Services() {

    return(
        <div style={styles.div}>
            <ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Women Haircut
    <span className="badge bg-primary rounded-pill"> $42</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Women Haircut & style
    <span className="badge bg-primary rounded-pill"> $42</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Men Haircut 
    <span className="badge bg-primary rounded-pill"> $20-$25</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Shampoo Blow Dry
    <span className="badge bg-primary rounded-pill"> $25</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Color
    <span className="badge bg-primary rounded-pill"> $70 and up</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Surface Highlight
    <span className="badge bg-primary rounded-pill"> $70</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Partial Highlight
    <span className="badge bg-primary rounded-pill"> 75$</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Full Highlight
    <span className="badge bg-primary rounded-pill"> $95</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Perm
    <span className="badge bg-primary rounded-pill"> $75+</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Roller Set
    <span className="badge bg-primary rounded-pill"> $20</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Updo
    <span className="badge bg-primary rounded-pill"> $50</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Wax - Lip / Brow / Chin
    <span className="badge bg-primary rounded-pill"> $20</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    4-8 Foils
    <span className="badge bg-primary rounded-pill"> $50</span>
  </li>
</ul>
<div style={styles.img}>
<img style={styles.img} src={require(`../../images/pexels-cottonbro-3992874.jpg`).default}/>
</div>
        </div>    
) 
};
