import React from 'react';
import './Tools.css';
import { ReactComponent as InsertImage } from '../icon/insert-image.svg';
import { ReactComponent as UploadFile } from '../icon/upload-file.svg';
import { ReactComponent as MessageHistory } from '../icon/message-history.svg';
import { ReactComponent as ShareLocation } from '../icon/share-location.svg';

const Tools = ({ append, set }) => {
  
  const handlInsertImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type','file');
    input.setAttribute('accept','image/png,image/jpg,image/jpeg,image/gif,image/svg+xml')
    input.onchange = (event) => {
      const files = event.target.files;
      if(files && files.length ){
        const fileReader = new FileReader();
        fileReader.onload= () => {
          const base64 = fileReader.result;
          const image = new Image();
          image.src = base64;
          image.style.maxWidth = '100%';
          append(image);
        }
        fileReader.readAsDataURL(files[0]);
      }
    }
    input.click();
  }

  return (
    <div className="Tools" align="right">
      <span className="ToolBtn">
        <InsertImage onClick={handlInsertImage}/>
      </span>
      <span className="ToolBtn Disabled">
        <UploadFile />
      </span>
      <span className="ToolBtn Disabled">
        <MessageHistory />
      </span>
      <span className="ToolBtn Disabled">
        <ShareLocation />
      </span>
    </div>
  )
};

export default Tools;