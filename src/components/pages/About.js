import React from "react";

const styles = {
    card: {
      padding: "10px",
      justifyContent: "center",
      display: "flex",
      backgroundColor: "#0D0D0D"       
    },
    img: {
        width: "100%"
    },
    title: {
        fontSize: "20px",
        marginTop: "60px",
        color: "#F2F2F2",
    },
    txt: {
        fontSize: "18px",
        marginTop: "10px",
        color: "#F2F2F2",
        

        // textIndent: "10mm"
    }
}

export default function About() {

    return(
        <div style={styles.card}>
            <div className="card" style={{"width": "80%"}}>
    <div style={styles.title}>
        <h1>
            Hair by Donna
        </h1>
    </div>
  {/* <img src="../../../me.jpg" className="card-img-top" alt=""/> */}
  <img style={styles.img} src={require(`../../images/pexels-cottonbro-3992874.jpg`).default}/>
  <div style={styles.txt} className="card-body">
    <p className="card-text">Welcome to the world of beauty... Our mission is to have all of our clients look and feel their best everyday. We strongly believe that everyone wants to portray a positive look that is flexible witht the diversity of their lifestyle. Whether its your first interview, or you just want to mix things up, we are here to help you look your best and make the best first impressions everywhere you go.
    <p className="card-text">
         We also teach makeup lessions. Whether you have a daughter that wants to start wearing makeup or you want a new style, we will listen to what youre looking for and create that fabulous custom look you deserve. I hope you enjoy my website and I look forward to meeting with you!</p>
    </p>
  </div>
            </div>
        </div>    
) 
};
