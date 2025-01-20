import { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

function Sidebar() {
    const [expand, setExpand] = useState(0);
    
   let  show = () =>{
    setExpand(prev=>!prev)
    }
    let shutDown = () =>{
        setExpand(0)

    }

    return (
        <div className="sidebar">
            <div className="top">
                <div className="menuIcon ml-5" >
                    <img onClick ={show} src={assets.menu_icon} alt="menu" />
                </div>
                <div className="newChat flex mt-10 gap-x-5 rounded-full cursor-pointer text-gray text-sm bg-gray-300 p-3" >
                    <img  onMouseOver={show}  onMouseLeave={shutDown}    src={assets.plus_icon} alt="new chat" />
                    {expand ? <p>New Chat</p> : null}
                </div>
                {expand ?
                <div className="recent">
                    <p className="mt-5 mb-5">Recent</p>
                    <div className="recentList flex gap-x-5 cursor-pointer hover:bg-gray-200 shadow-md rounded-full p-1">
                        <img src={assets.message_icon} alt="message" />
                        <p>What is React project....</p>
                    </div>
                </div>
                : null}
            </div>
            <div className="bottom flex gap-y-2 flex-col text-center cursor-pointer">
                <div className="bottom-item flex gap-x-5">
                    <img src={assets.question_icon} alt="search" />
                    {expand ? <p>Help</p> : null}
                </div>
                <div className="bottom-item flex gap-x-5">
                    <img src={assets.history_icon} alt="history" />
                    {expand ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item flex gap-x-5">
                    <img src={assets.setting_icon} alt="settings" />
                    {expand ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;