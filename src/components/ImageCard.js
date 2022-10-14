import {React} from "react";

function ImageCard({adress}){
    return(
        <div
        style={{
        width:"300px",
        height:'400px',
        backgroundImage:`url(${adress})`,
        cursor:'pointer',
        color:'white',
        borderRadius:'30px',
        textAlign: "center",
        padding:'10px',
        marginLeft:'5px',
        textDecoration:'none',
        marginTop:'5px'
        }}>

        </div>
    )
}

export default ImageCard