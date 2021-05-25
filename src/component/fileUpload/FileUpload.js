import React, {useState, useEffect} from 'react'
import axios from 'axios';

function FileUpload() {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);

    const upload = (e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('name',name);
        data.append('image',file);
        // https://httpbin.org/anything  : Api for sending data and gettig response
        
        axios.post('http://localhost:5000/upload',data).then(
            res => console.log(res)
        ).catch(error => console.log(error))
        
    }
    return (
        <div>
            <form encType='multipart/form-data'>
                <label htmlFor="name" >Name</label>
                <input name='name' type="text" onChange={e=>setName(e.target.value)}/>
                <label htmlFor="file">File</label>
                <input name='image' type="file" onChange={e=>setFile(e.target.files[0])}/> 
                {/* target.files can accept multiple file to upload single file we need to do: target.files[0] */}
            </form>
            <button onClick={upload} >Submit</button>
        </div>
    )
}

export default FileUpload
