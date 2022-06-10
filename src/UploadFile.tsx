import React, { useState } from "react";
import { FileDrop } from "react-file-drop"



const UploadFile =() =>{
 
  const styles = {
    border: "1px solid black",
    width: 600,
    color: "black",
    padding: 20,
    height:300,
    margin: "0 auto"
  };
  const [img, setImg] = useState<any>();
  const setData = (value:any,e:any)=>{
    console.log("value",value[0]?.name)
    setImg(window.URL.createObjectURL(value[0]?.name));
    //console.log("e",e.target.files)
  }
      
      return (

        <div>
        <h1>React File Drop demo</h1>
        <div style={styles}>
          <FileDrop
            // onFrameDragEnter={(event) => console.log("onFrameDragEnter", event)}
            // onFrameDragLeave={(event) => console.log("onFrameDragLeave", event)}
            // onFrameDrop={(event) => console.log("onFrameDrop", event)}
            // onDragOver={(event) => console.log("onDragOver", event)}
            // onDragLeave={(event) => console.log("onDragLeave", event)}
            onDrop={(files, event) => setData(files,event)}
          >
            Drop some files here!
          </FileDrop>
          <img src={img} alt="" />
        </div>
      </div>

      )
}

export default UploadFile