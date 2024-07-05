import user_icon from "../user_icon.png";
import my_pic from '../My_pic_png.png'
import compass_icon from "../compass_icon.png";
import message_icon from "../message_icon.png";
import bulb_icon from "../bulb_icon.png";
import code_icon from "../code_icon.png";
import gallery_icon from "../gallery_icon.png";
import mic_icon from "../mic_icon.png";
import send_icon from "../send_icon.png";
import gemini_icon from '../gemini_icon.png';
import { useContext } from "react";
import { Context } from "../Context/Context";

function Main_file() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={my_pic} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Nishanth</span>
              </p>
              <p className="mt-[-20px]">How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={compass_icon} alt="Compass Icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={bulb_icon} alt="Bulb Icon" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={message_icon} alt="Message Icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={code_icon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {/* Render the result here */}
            {/* {loading ? <p>Loading...</p> : <p>{resultData}</p>} */}
               <div className="result-title">
                    <img src={my_pic} alt="" />
                    <p>{recentPrompt}</p>
               </div>
               <div className="result-data">
                    <img src={gemini_icon} alt="" />
                    {loading?<div className="loader">
                         <hr />
                         <hr />
                         <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
               </div>
          </div>
        )}
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter prompt here"
          />
          <div>
            <img src={gallery_icon} alt="Gallery Icon" />
            <img src={mic_icon} alt="Mic Icon" />
            {input?<img onClick={() => onSent(input)} src={send_icon} alt="Send Icon" />:null}
          </div>
        </div>
        <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
}

export default Main_file;
