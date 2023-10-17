import {useRef,useState,useEffect} from 'react'
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState(``)
  const [result, setResult] = useState(``)
  const fileInputRef = useRef();
  const onUploadClick=()=>{
    fileInputRef.current.click()
  }

  const logo = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";
  useEffect(()=>{
    const getImage = async ()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        setResult(response.path)
      }
    }
    getImage();
  },[file])
  return (
    <div className="container">
     <img src={logo} alt="" />

     <div className="wrapper">
        <h1>Simple file sharing</h1>
        <p>Upload & share the download link</p>

        <button onClick={()=>onUploadClick()}>upload</button>
        <input
        ref={fileInputRef} type="file" name="" id="" style={{display:'none'}}
        onChange={(e)=> setFile(e.target.files[0])}/>

        <a href={result}>{result}</a>
    </div>
    </div>
  );
}

export default App;
