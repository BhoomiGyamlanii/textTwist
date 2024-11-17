import React,{useState} from 'react'

export default function TextForm(props) {
  const handleupClick=()=>{
    //console.log(text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleclearClick=()=>{
    let newText= '';
    setText(newText);
  }
    const handleloClick=()=>{
      let newText= text.toLowerCase();
      setText(newText);
    }
    const handleonChange=(event)=>{
      setText(event.target.value);
    }
    const handleReverse = () => {
      const newText = text.split('').reverse().join('');
      setText(newText);
    };
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);


    }

    const [text, setText]= useState('');
    //setText("hi i am new set text");
  return (
    <>
    
    <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
        <h1>{props.heading}</h1>
<div className="my-3">
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#042743':'white'}}onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
