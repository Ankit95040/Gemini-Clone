// import React, { useState  ,useContext} from 'react'
// import './Sidebar.css'
// import {assets} from '/Users/ankitraj/Desktop/React/Gemini2.0/Gemini/src/assets/assets.js'
// import { Context } from '../../Context/Context'

// const Sidebar = () => {
//     const[extended,setextended]=useState(false)
//     const {onSent,previousPromts,setRecentPrompt,newChat} =useContext(Context)
//     const loadPrompt = async(prompt)=>{
//         setRecentPrompt(prompt)
//         await onSent(prompt)
//     }

//   return (
//     <div className="sidebar">
//         <div className="top">
//             <img className='menu' onClick={()=>setextended(!extended)} src={assets.menu_icon} alt="" />
//             <div onClick={()=>newChat()} className="new-chat">
//                 <img src={assets.plus_icon} alt="" />
//                 {extended?<p>New Chat</p>:<p></p>}
//             </div>
//             {extended?<div className="recent">
//                 <p className='recent-title'>Recent</p>
//                 {previousPromts.map((item,index)=>{
//                    return(
//                     <div onClick={()=>loadPrompt(item)} className="recent-entry">
//                     <img src={assets.message_icon} alt="" />
//                     <p>{item}...</p>

//                 </div>
//                    )
//                 })}
               
//             </div>:<p></p>}

//         </div>
//         <div className="bottom">
//             <div className="bottom-item recent-entry">
//                 <img src={assets.question_icon} alt="" />
//                 {extended?<p>Help</p>:null}
//             </div>
//             <div className="bottom-item recent-entry">
//                 <img src={assets.history_icon} alt="" />
//                 {extended?<p>Activity</p>:null}
//             </div>
//             <div className="bottom-item recent-entry">
//                 <img src={assets.setting_icon} alt="" />
//                 {extended?<p>Setting</p>:null}
//             </div>



//         </div>

//     </div>
//   )
// }

// export default Sidebar
import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { assets } from '/Users/ankitraj/Desktop/React/Gemini2.0/Gemini/src/assets/assets.js';
import { Context } from '../../Context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className="sidebar">
            <div className="top">
                <img className="menu" onClick={() => setExtended(!extended)} src={assets.menu_icon} alt="Menu Icon" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="Plus Icon" />
                    {extended ? <p>New Chat</p> : <p></p>}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {previousPrompt && previousPrompt.length > 0 ? (
                            previousPrompt.map((item, index) => (
                                <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="Message Icon" />
                                    <p>{item}...</p>
                                </div>
                            ))
                        ) : (
                            <p>No recent prompts available.</p>
                        )}
                    </div>
                ) : <p></p>}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Question Icon" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="History Icon" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Setting Icon" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

