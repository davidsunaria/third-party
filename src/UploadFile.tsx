import React, { useEffect, useState } from "react";
import { FileDrop } from "react-file-drop";
import { FileUploader } from "react-drag-drop-files";

const UploadFile = () => {
  const styles = {
    border: "1px solid black",
    width: 600,
    color: "black",
    padding: 20,
    height: 200,
    margin: "0 auto",
  };
  const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];
  const [file, setFile] = useState<string>();
  const [imgArray, setImgArray] = useState<string[]>([]);

  const handleChange = (file: Blob) => {
    setImgArray((_: string[]) => [..._, URL?.createObjectURL(file)]); // standby of array push method
    //no need to create empty array
  };

  //console.log("imgArray", imgArray);
  return (
    <div>
      <h1>React File Drop demo</h1>
      <div style={styles}>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
      </div>
      <h4>Image Display here</h4>
      {imgArray &&
        imgArray?.length > 0 &&
        imgArray.map((val: any, i: number) => {
          return (
            <>
              <img
                key={i}
                src={val}
                alt=""
                height={300}
                width={300}
                className="mx-2"
              />
              <i
                className="fa fa-remove"
                style={{ fontSize: "48px", color: "red" }}
              ></i>
            </>
          );
        })}
    </div>
  );
};

export default UploadFile;
