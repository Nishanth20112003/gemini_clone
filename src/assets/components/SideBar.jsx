import menu_icon from "../menu_icon.png";
import plus_icon from "../plus_icon.png";
import message_icon from "../message_icon.png";
import question_icon from "../question_icon.png";
import history_icon from "../history_icon.png";
import setting_icon from "../setting_icon.png";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";

function SideBar() {
  let [extender, setExtender] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  function handleSideBar() {
    setExtender(!extender);
  }
  return (
    <>
      <div className="sidebar bg-black">
        <div className="top">
          <img src={menu_icon} className="menu" onClick={handleSideBar} />
          <div className="new-chat">
            <img src={plus_icon} alt="" />
            {extender ? (
              <p
                className="transition-all duration-1000"
                onClick={() => newChat()}
              >
                New Chat
              </p>
            ) : (
              ""
            )}
          </div>
          {extender ? (
            <div className="recent transition-all duration-1000">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item, index) => {
                return (
                  <div
                    onClick={() => loadPrompt(item)}
                    className="recent-entry"
                  >
                    <img src={message_icon} alt="" />
                    <p className="mt-[-2px]">{item.slice(0, 18)}...</p>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={question_icon} alt="" />
            {extender ? (
              <p className="transition-all duration-1000">Help</p>
            ) : (
              ""
            )}
          </div>
          <div className="bottom-item recent-entry">
            <img src={history_icon} alt="" />
            {extender ? (
              <p className="transition-all duration-1000">Activity</p>
            ) : (
              ""
            )}
          </div>
          <div className="bottom-item recent-entry">
            <img src={setting_icon} alt="" />
            {extender ? (
              <p className="transition-all duration-1000">Settings</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBar;
