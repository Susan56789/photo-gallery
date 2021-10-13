import React from "react";
import Firestore from "../hooks/useFirestore";
import '../App.css';
import {motion} from 'framer-motion';

const Grid = () =>{

    const {docs} = Firestore('images');

    return(
        <div className="img-grid">
{docs && docs.map(doc =>(
    <motion.div className="img-wrap" key={doc.id} 
    whileHover={{opacity:1}}
    >
<img src={doc.url} alt="uploaded pic" />
    </motion.div>
))}
        </div>
    );
}

export default Grid;