import React, {useState} from 'react'

export default function TextForm(props) {
  // text = 'my new text'; // wrong way to assign text
  // setText('my new text'); // right way to assign text
  const handleUpClick = () => {
    // console.log("Upper case was clicked");
    // setText("You have clicked on handleUpClick");
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case!", "success");
  }
  const handleLoClick = () => {
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case!", "success");
  }
  const handleClrClick = () => {
    let newText ='';
    setText(newText);
    props.showAlert("text box cleared!", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    props.showAlert("text box edited!", "success");
  }
  const handleCopyClick = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text box contents copied on clipboard!", "success");
  }

  const handleExtraSpaceClick = () => {
    // let newText =text.replace(/\s+/g, ' ').trim();
    // console.log(newText);

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  
    // Both methods are ok
    props.showAlert("Extra spaces have been removed!", "success");

  }
  const handleFontSizeClick = () => {
    let demo_paragraph = document.getElementById( 'myBox' );
    demo_paragraph.style.fontSize = "150%" ;
    props.showAlert("Font size increased!", "success");
  }

  const [text, setText] =useState('Enter text here')
  
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8" value={text} onChange={handleOnChange} ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={handleFontSizeClick}>ٖFont Size</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes are required to read this</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
