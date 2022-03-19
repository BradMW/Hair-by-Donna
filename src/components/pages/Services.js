import React from "react";

const styles = {
    div: {
      height: "100%",
      width: "100%",
      marginTop: "96px",
      justifyContent: "space-evenly",
      display: "inline-flex",
      flexWrap: "wrap",
      backgroundColor: "#0D0D0D",
      textDecoration: "none",
      paddingTop: "50px",
      paddingBottom: "50px",
      
    },
    img: {
      // width: "50%",
      justifyContent: "start",
      display: "inline-flex",
      flexWrap: "wrap",
      // border: "solid gold",
      borderRadius: '10px 10px 10px 10px',
      backgroundColor: "#BFBFBF",
      padding: "5px"
      
  },
    box: {
      borderRadius: '10px 10px 10px 10px',
      boxShadow: "0px 0px 24px 2px #737373",
      padding: "10px",
      color: "white",
      backgroundColor: "#2198A6",
      margin: "10px",
      textAlign: "center",
      border: "solid"
    }
    
}

export default function Services() {

    return(
        <div style={styles.div}>
          <div style={styles.img}>
<img style={styles.img} src={require(`../../images/IMG_7820.jpg`).default}/>
</div>
            <ul style={{"textDecoration": "none"}} className="list-group">
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Women Haircut
    <span className="badge bg-primary rounded-pill"> $42</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Women Haircut & style
    <span className="badge bg-primary rounded-pill"> $42</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Men Haircut 
    <span className="badge bg-primary rounded-pill"> $20-$25</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Shampoo Blow Dry
    <span className="badge bg-primary rounded-pill"> $25</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Color
    <span className="badge bg-primary rounded-pill"> $70 and up</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Surface Highlight
    <span className="badge bg-primary rounded-pill"> $70</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Partial Highlight
    <span className="badge bg-primary rounded-pill"> 75$</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Full Highlight
    <span className="badge bg-primary rounded-pill"> $95</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Perm
    <span className="badge bg-primary rounded-pill"> $75+</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Roller Set
    <span className="badge bg-primary rounded-pill"> $20</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Updo
    <span className="badge bg-primary rounded-pill"> $50</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    Wax - Lip / Brow / Chin
    <span className="badge bg-primary rounded-pill"> $20</span>
  </li>
  <li style={styles.box} className="list-group-item d-flex justify-content-between align-items-center">
    4-8 Foils
    <span className="badge bg-primary rounded-pill"> $50</span>
  </li>
</ul>
<div style={styles.img}>
<img style={styles.img} src={require(`../../images/IMG_7820.jpg`).default}/>
</div>
        </div>    
) 
};
