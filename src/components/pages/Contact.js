import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

const styles = {
  img: {
    width: "50%",
    marginTop: "12%",
    marginBottom: "1%",
    borderRadius: '20px 20px 20px 20px',
    boxShadow: "0px 0px 24px 2px #737373",
    padding: "10px",
    backgroundColor: "#BFBFBF",
},
  card: {
    width: "100%",
    justifyContent: "center",
    display: "inline-flex",
    flexWrap: "wrap",
    backgroundColor: "#0D0D0D",
    color: "white",
    fontFamily: "Courier New",
    paddingBottom: "3%"
}
}

export default function Contact() {
    return(
    <div className="card mb-3" style={styles.card}>
  <div className="row g-0">
    <div className="col-md-4">
    <img style={styles.img} src={require(`../../images/sunflower.jpg`).default}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Donna Loehr</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
)
}; 

