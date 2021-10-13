import React, {useEffect} from "react";
import Storage from "../hooks/useStorage";
import '../App.css';

const Progress = ({File,setFile}) => {
const {url, progress} = Storage(File);

useEffect(()=>{
if(url){
    setFile(null);
}
},[url,setFile])

//console.log(progress,url);
return(
<div className="progress-bar" style={{width: progress + '%'}}>
    
</div>
);
}

export default Progress;