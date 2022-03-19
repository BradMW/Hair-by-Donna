import React from 'react';

const styles = {
    footer: {
        display: "flex",
        margin: "0",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "20px",
        backgroundColor: "#BFBFBF",
        width: "100%",
        height: "5.5rem",
        listStyle: "none",
        fontFamily: "Courier New"
    },
    li: {
        padding: "2px",
        
       
    }
}

export default function Footer() {

    return(
        <div style={styles.footer}>
            <ul style={styles.footer}>
                {/* <li style={styles.li}>555-555-5555</li> */}
                <li style={styles.li}><a href="">sizzorbuny@gmail.com</a></li>
                <li style={styles.li}><a href="https://m.facebook.com/sizzorbuny/" rel="noreferrer">Hair by Donna FaceBook </a></li>
                <li style={styles.li}><a href="" rel="noreferrer">Insta (coming soon!)</a></li>
            </ul>
  </div>
) 
}


