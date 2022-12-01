import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpclick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UperCase", "success")
  }
  const handleLoclick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCase", "success")
  }
  const handleCPclick = () =>{
    let newText = text + " " + text;
    setText(newText)
    props.showAlert("Text is copied and paste", "success")
  }
  const handleclearclick = () =>{
    let newText = "";
    setText(newText)
    props.showAlert("Text has been cleared", "success")
  }
  const handleFUpclick = () =>{
    let newText = text.toLowerCase();
    setText(newText.charAt(0).toUpperCase() + newText.slice(1))
    props.showAlert("Converted first to UperCase", "success")
  }

  const handleOnchange = (event)=> {
    console.log("on change");
    setText(event.target.value);
  }
  const [text,setText] = useState('')
  // setText("new text");
  return (
      <>
      <div className='container my-3' style={{color: props.Mode === 'dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
  <textarea className="form-control" value={text} placeholder='Enter text here' onChange={handleOnchange} style={{backgroundColor: props.Mode === 'dark'?'grey':'white', color: props.Mode === 'dark'?'white':'black'}} id="TextBox" rows={5}></textarea>
  <button className="btn btn-primary m-2" onClick={handleUpclick} disabled={text.length===0}>Convert to Uppercase</button>
  <button className="btn btn-primary m-2" onClick={handleLoclick} disabled={text.length===0}>Convert to Lowercase</button>
  <button className="btn btn-primary m-2" onClick={handleCPclick} disabled={text.length===0}>Copy and paste</button>
  <button className="btn btn-primary m-2" onClick={handleclearclick} disabled={text.length===0}>Clear all</button>
  <button className="btn btn-primary m-2" onClick={handleFUpclick} disabled={text.length===0}>Convert First to Uppercase</button>
    </div>
    <div className="container my-3" style={{color: props.Mode === 'dark'?'white':'black'}}>
      <h2>Text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Cherecters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
      </>
  )
}
