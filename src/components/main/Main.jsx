import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import Cards from '../card/Card';
import { context } from '../../context/Context';


function Main() {
    const { input,
        setInput,
        onSent,
        recentprompt,
        setRecentprompt,
        prevPrompt,
        setPrevprompt,
        showResult,
        setShowresult,
        loading,
        setLoading,
        resultData,
        setResultdata } = useContext(context)
    return (
        <div className='main '>
            <div className="nav flex items-center justify-between">
                <p>Gemini</p>
                <img className="max-w-10 rounded-full " src={assets.user_icon} alt="" />
            </div>
   
            <div className="main-container text-center">
                {!showResult ? 
                <>
                <div className="greet ">
                    <p><span>Hello Dev,</span></p>
                    <p >How can I help you today?</p>
                </div>
                <div className="cards flex items-center justify-center gap-7 ">
                    <Cards text="Suggest your suggestion" src={assets.compass_icon} />
                    <Cards text="Ask your question" src={assets.bulb_icon} />
                    <Cards text="Suggest your suggestion" src={assets.message_icon} />
                    <Cards text="Ask your question" src={assets.code_icon} />
                </div>
                </>
                :<div className='result'>
                 <div className="resultdiv">
                  <p>{recentprompt}</p>                  
                 </div>
                 <div className="resultData overflow-auto">
                    <img src={assets.gemini_icon} alt="gemini" />
                    <p  className='overflow-auto'     dangerouslySetInnerHTML={{__html:resultData}}></p>
              {console.log(resultData)}
                 </div>
            </div>
           }
            </div>




            <div className="main-bottom">
                <div className="searchBox flex items-center justify-between gap-1">
                    <input   onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder="Search" />
                    <div className="searchIcon flex  gap-3">
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>{onSent()}} src={assets.send_icon} alt="" />
                    </div>

                </div>
                <p className='text-center p-3'>Gemini may display inaccurate info about people, so double-check its responses, Your privacy and Gemini Apps</p>
            </div>
        </div>

    )
}

export default Main
