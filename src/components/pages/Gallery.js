import React from 'react';

const styles = {
    card: {
        padding: "8%",
        // marginTop: "4%",
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#0D0D0D"
        
    },
    images: {
        maxWidth: '30rem',
        maxHeight: '40rem',
        borderRadius: '20px 20px 20px 20px',
        boxShadow: "0px 0px 24px 2px #737373",
        padding: "10px",
        margin: "2rem",
        backgroundColor: "#BFBFBF"
    }
}

const hairStyleInfo = [
    {
        imgName: "long-cyan-blonde",
         altTxt: "Picture of a girl with shoulder length hair that is a light blue/ cyan color with blonde roots."
    },
    {
        imgName: "red-brown-curls",
         altTxt: "Picture of a girl with curly shoulder length blonde hair with dark red highlights."
    },
    {
       imgName: "blonde-spikes",
        altTxt: "Picture of a guy with short dark blonde spikey hair."
    },
    {
        imgName: "reddish-brown-2",
         altTxt: "Picture of a girl with short blonde hair that dark red highlights."
    },
    {
        imgName: "brown-purple-2",
        altTxt: "Picture of a girl with light brown hair with streakes of light purple highlights."
    },
    {
        imgName: "brown-purple",
        altTxt: "Picture of a girl with light brown hair with streakes of light purple highlights."
    },
    
    {
       imgName: "curly-red-purple",
        altTxt: "Picture of longer curly hair with reds, pinks, purples, and blues swirled together."
    },
    {
       imgName: "long-blonde-black",
        altTxt: "Picture of a girl with long blonde hair that fades into black."
    },
    {
       imgName: "long-blonde-purple-tips",
        altTxt: "Picture of a girl with blonde hair that has purple hair underneath."
    },
    {
        imgName: "blonde-pink-tips",
        altTxt: "Picture of a girl with short rounded blonde hair with pink tips."
    },
    
    {
        imgName: "short-reddish-brown",
         altTxt: "Picture of a girl with short blonde hair that dark red highlights."
    },
    
    {
        imgName: "short-clean-amber",
         altTxt: "Picture of a girl short rounded blonde hair with dark red highlights."
    },
    {
        imgName: "short-purple-turquoise",
         altTxt: "Picture of a girl with short hair that is purple on the right side and turquoise on the left side."
    },
    
    {
        imgName: "silver-top",
         altTxt: "Picture of a short black hair with silver hair spiked back on top."
    },
    {
        imgName: "silver-top-2",
         altTxt: "Picture of a short black hair with silver hair spiked back on top."
    }
]

export default function Gallery() {

    
    return (
        <div style={styles.card}>
        {hairStyleInfo.map((hairStyleInfo, i) => (
            <div className="card" key={i}>
                <div className= "imgs" >
               <a href={hairStyleInfo.link} target="_blank" rel="noreferrer">
                <img style={styles.images} src={require(`../../images/${hairStyleInfo.imgName}.jpg`).default} className="card-img-top" alt={hairStyleInfo.altTxt}/>
               </a>
                </div>
            </div>
            ))}
        </div>
    )
};