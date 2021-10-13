import React, {useEffect} from "react";
import Storage from "../hooks/useStorage";
import '../App.css';
import {motion} from  'framer-motion';

const Progress = ({File,setFile}) => {
const {url, progress} = Storage(File);

useEffect(()=>{
if(url){
    setFile(null);
}
},[url,setFile])

//console.log(progress,url);
return(
<motion.div className="progress-bar"
initial={{width:0}}
animate={{width: progress + '%'}}
>
</motion.div>
);
}

export default Progress;