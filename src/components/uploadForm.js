import React,{useState} from 'react';
import '../App.css';
import Progress from './progressBar';

const Upload = () =>{
    const [File, setFile] = useState(null);

    const [error, setError] =useState(null);

const types = ['image/png','image/jpeg'];

const changeHandler = (e) =>{
    let selected = e.target.files[0];

    if(selected && types.includes(selected.type)){
        setFile(selected);
        setError(' ');
    }else{
        setFile(null);
setError('Please select an image file(png or jpeg)');
    }
}

   return (
       
<form>
<input type='file' onChange={changeHandler}/>

<div className='output'>
{error && <div className='error'>{error}</div>}
{File && <div>{File.name}</div>}
{File && <Progress File={File} setFile={setFile}/> }
</div>
</form>

   ) ;
}

export default Upload;