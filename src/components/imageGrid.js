import React from "react";
import Firestore from "../hooks/useFirestore";
import '../App.css';

const Grid = () =>{

    const {docs} = Firestore('images');

    return(
        <div className="img-grid">
{docs && docs.map(doc =>(
    <div className="img-wrap" key={doc.id} 
    >
<img src={doc.url} alt="uploaded pic" />
    </div>
))}
        </div>
    );
}

export default Grid;