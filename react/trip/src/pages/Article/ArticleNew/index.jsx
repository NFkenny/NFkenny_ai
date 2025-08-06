import { 
  useState,
  useRef 
} from 'react'
import styles from './new.module.css'

const ArticleNew = () =>{
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // 存储对象功能
  const mediaRecorderRef = useRef(null)
  // 存储一些数据
  const chunksRef = useRef([])
  const blobToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]); // 只取 base64 数据部分
      reader.readAsDataURL(blob);
    });
  };
  const handleStartRecording = async() => {
    try {
      // html5 api BOM
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      console.log(stream,'////');
      const blob = new Blob(chunksRef.current, {
        type: 'audio/webm' 
      })
      const base64Audio = await blobToBase64(blob);
      console.log(base64Audio);

      mediaRecorderRef.current = new MediaRecorder(stream)
      mediaRecorderRef.current.start()
      mediaRecorderRef.current.ondataavailable = (e) => {
        if(e.data.size > 0){
          console.log(e.data);
          chunksRef.current.push(e.data);
        }
      }
      mediaRecorderRef.current.onstop = async() =>{
        console.log(chunksRef.current);
      }
    }catch (err) {
      console.log(err)
    }
  }
  const transcribeAudio = async (base64Audio) => {
    
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current?.stop();
    chunksRef.current = [];

  }
  const handleSaveDraft = () => {
    
  }
  const handlePublish = () => {
  }

  return (
    <div className={styles.container}>
      <h1>发布文章</h1>
      <div className={styles.inputWrapper}>
        <input 
          type='text'
          className={`${styles.input} ${styles.title}`} 
          placeholder='请输入标题'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className={styles.textareaWrapper}>
        <textarea 
          className={`${styles.input} ${styles.textarea}`} 
          placeholder='请输入内容'
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        >
        </textarea>
        <button 
          className={styles.micButton}
          onMouseDown={handleStartRecording}  
          onMouseUp={handleStopRecording}
          title="按住开始录音"
        >
          🎤
        </button>
      </div>
      <div className={styles.buttonGroup}>
        <button 
          onClick={handleSaveDraft}
          className={`${styles.button} ${styles.save}`}>保存草稿
        </button>
        <button 
          onClick={handlePublish}
          className={`${styles.button} ${styles.publish}`}>发布
        </button>
      </div>
    </div>
  )
}
export default ArticleNew
