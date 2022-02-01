import React from 'react';

const styles = {
    footer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingTop: "10px",
        paddingBottom: "10px",
        background: "#BFBFBF",
        textDecoration: "none",
        height: "2rem",
       
    },
    li: {
        padding: "6px",
        display: "inline",
        fontSize: "20px",
        color: "#F2F2F2",
        borderRadius: '10px 10px 10px 10px',
        // boxShadow: "0px 0px 24px 2px #737373",
        backgroundColor: "#0D0D0D"
    }
}

export default function Footer() {

    return(
        <div>
            <ul style={styles.footer}>
                {/* <li style={styles.li}>555-555-5555</li> */}
                <li style={styles.li}><a href="">sizzorbuny@gmail.com</a></li>
                <li style={styles.li}><a href="" rel="noreferrer">FaceBook (coming soon!)</a></li>
                <li style={styles.li}><a href="" rel="noreferrer">Insta (coming soon!)</a></li>
            </ul>
  </div>
) 
}


