import React, { useState } from "react";
import './style.css';
const PictureCard = (props) => {
  console.log(props,'props');
  const {
    uploadImage,
    word
   } = props;
  console.log(uploadImage,'uploadImage');
  const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');
  // const [word, setWord] = useState('');
  const updataImageData = (e) => {
    // html5 的文件上传功能
    // 可选链操作符
    // const file = e.target.files?e.target.files[0]:null;
    const file = e.target.files?.[0];
    if(!file) { return; }
    console.log(file);
    // 图片预览 I/O操作 异步
    return new Promise((resolve, reject) => {
      // html5 文件读取器
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log(reader.result);
        setImgPreview(reader.result);
        // 如何将图片数据交给父组件
        uploadImage(reader.result);
        resolve(reader.result);
      }
    })
  };
  return (
    <div className="card">
      <input
      id="selectImage"
      type="file"
      accept=".jpg,.jpeg,.png,.gif"
      onChange={updataImageData}
      />
      <label 
      className="upload"
      htmlFor="selectImage">
        <img src={imgPreview} alt="preview" />
      </label>
      {/**
       * template -> JSX -> {数据绑定 -}
       */}
      <div className="word">{word}</div>
    </div>
  );
};

export default PictureCard;
