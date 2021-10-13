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
   layout
    whileHover={{opacity:1}}
    >
<motion.img src={doc.url} alt="uploaded pic" 
initial={{opacity: 0}}
animate ={{opacity: 1}}
transition={{delay: 1}}
/>
    </motion.div>
))}
        </div>
    );
}

export default Grid;