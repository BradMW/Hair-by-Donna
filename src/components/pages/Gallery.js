import React from 'react';

const styles = {
    card: {
        padding: "50px",
        justifyContent: "center",
        display: "inline-flex",
        flexWrap: "wrap",
        backgroundColor: "#ADD5F7"
        
    },
    description: {
        background: '#16193B',
        fontSize: '3rem',
        color: 'white'
    }
}

const hairStyleInfo = [
    {
        imgName: "blonde-pink-tips",
        altTxt: "Picture of a girl with short rounded blonde hair with pink tips."
    },
    {
       imgName: "blonde-spikes",
        altTxt: "Picture of a guy with short dark blonde spikey hair."
    },
    {
        imgName: "brown-purple",
        altTxt: "Picture of a girl with light brown hair with streakes of light purple highlights."
    },
    {
        imgName: "brown-purple-2",
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
        imgName: "long-cyan-blonde",
         altTxt: "Picture of a girl with shoulder length hair that is a light blue/ cyan color with blonde roots."
    },
    {
        imgName: "red-brown-curls",
         altTxt: "Picture of a girl with curly shoulder length blonde hair with dark red highlights."
    },
    {
        imgName: "short-reddish-brown",
         altTxt: "Picture of a girl with short blonde hair that dark red highlights."
    },
    {
        imgName: "reddish-brown-2",
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

export default function Projects() {

    
    return (
        <div style={styles.card}>
        {hairStyleInfo.map((project, i) => (
            <div style={{"margin": "1rem", "width": "34rem", "height": "40rem", "boxShadow": "0px 0px 24px 2px #16193B"}} className="card" key={i}>
                <div style={{"height": "30rem"}} className= "imgs" >
               <a href={project.link} target="_blank" rel="noreferrer">
                <img src={require(`../../images/${project.imgName}.jpg`).default} className="card-img-top" alt={project.altTxt}/>
               </a>
                </div>
                {/* <div style={styles.description} class="card-body">
                    <p class="card-text" style={{"font-size": "20px"}}>{project.description}</p>
                </div> */}
            </div>
            ))}
        </div>
    )
};