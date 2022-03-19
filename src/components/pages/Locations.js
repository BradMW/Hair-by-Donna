import React from "react";

const styles = {
    cardBody: {
        justifyContent: "center",
        display: "inline-flex",
        flexWrap: "wrap",
        backgroundColor: "#0D0D0D",
        color: "white",
        width: "100%",
        paddingLeft: "0%"
    },
    img: {
        width: "94%",
        marginTop: "6%",
        
        borderRadius: '20px 20px 20px 20px',
        boxShadow: "0px 0px 24px 2px #737373",
        padding: "10px",
        backgroundColor: "#BFBFBF"
    },
    description: {
        justifyContent: "center",
        display: "inline-flex",
        flexWrap: "wrap",
        color: "white",
        marginTop: "120px",
        width: "100%",
        fontSize: "30px",
        paddingLeft: "5%",
        gap: "0px",
        fontFamily: "Courier New",
        // marginBottom: "20%",
        
    }
}

export default function Locations() {

    return(
    <div style={styles.cardBody} >
        
    <div style={styles.description} className="card-body">
        <p className="card-text">You can find your perfect hair style here at: 3000 Joe Dimaggio Blvd, Suite 33, Round Rock, TX 78665.</p>
        <p className="card-text">I also do appointments for seniors in home or at senior centers!</p>
     </div>

        <div className="card" style={{"width": "30rem"}}>
            <img style={styles.img} src={require(`../../images/donnaMap.JPG`).default}/>
            <img style={styles.img} src={require(`../../images/donnaMap.JPG`).default}/>
            <img style={styles.img} src={require(`../../images/donnaMap.JPG`).default}/>
            
        </div> 
            
    </div>
) 
};
