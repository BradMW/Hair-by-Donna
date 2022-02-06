import React from "react";

const styles = {
    card: {
      padding: "10px",
    //   justifyContent: "center",
      display: "grid",
      gridTemplateColumns: "2fr, 1fr",
      gap: "10px",
      gridAutoRows: "minmax(100px, auto)",
      backgroundColor: "#0D0D0D"       
    },
    img: {
        width: "80%",
        paddingRight: "20px",
        margin: "10px"
    },
    title: {
        
        fontSize: "20px",
        marginTop: "110px",
        color: "#F2F2F2",
        paddingLeft: "20rem",
        paddingTop: "8px"
    },
    txt: {
        gridColumn: "2/3",
        gridRow: "1/3",
        fontSize: "30px",
        // marginTop: "100px",
        color: "#F2F2F2",
        textAlign:"left",
        paddingRight: "20rem",
        paddingTop: "15rem",
        textShadow: "10px, 10px, blue"
    }
}

export default function About() {

    return(
        <div style={styles.card}>
            <div>
    <div style={styles.title}>
        <h1>
            Hair by Donna
        </h1>
    </div>
  {/* <img src="../../../me.jpg" className="card-img-top" alt=""/> */}
  <img style={styles.img} src={require(`../../images/pexels-cottonbro-3992874.jpg`).default}/>
            </div>
  <div style={styles.txt} >
    <p className="card-text">Welcome to the world of beauty... Our mission is to have all of our clients look and feel their best everyday. We strongly believe that everyone wants to portray a positive look that is flexible witht the diversity of their lifestyle. Whether its your first interview, or you just want to mix things up, we are here to help you look your best and make the best first impressions everywhere you go.
    <p className="card-text">
         We also teach makeup lessions. Whether you have a daughter that wants to start wearing makeup or you want a new style, we will listen to what youre looking for and create that fabulous custom look you deserve. I hope you enjoy my website and I look forward to meeting with you!</p>
    </p>
  </div>
  </div> 
) 
};
