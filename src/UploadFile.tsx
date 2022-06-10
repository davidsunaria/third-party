import React, {  } from "react";
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

  const setData = (value:any,e:any)=>{
    console.log("value",value)
    console.log("e",e)
  }
      
      return (

        <div>
        <h1>React File Drop demo</h1>
        <div style={styles}>
          <FileDrop
            onFrameDragEnter={(event) => console.log("onFrameDragEnter", event)}
            onFrameDragLeave={(event) => console.log("onFrameDragLeave", event)}
            onFrameDrop={(event) => console.log("onFrameDrop", event)}
            onDragOver={(event) => console.log("onDragOver", event)}
            onDragLeave={(event) => console.log("onDragLeave", event)}
            onDrop={(files, event) => setData(files,event)}
          >
            Drop some files here!
          </FileDrop>
        </div>
      </div>

      )
}

export default UploadFile