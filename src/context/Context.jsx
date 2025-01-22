import { createContext, useState } from "react";
import generate from '../config/gemini'

export const context = createContext();

const contextProvider = (props) => {

  const [input, setInput] = useState(" ");
  const [recentprompt, setRecentprompt] = useState(" ");
  const [prevPrompt, setPrevprompt] = useState([]);
  const [showResult, setShowresult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultdata] = useState(" ");


  const onSent = async (prompts) => {
    setResultdata(" ")
    setLoading(true)
    setShowresult(true)
    setRecentprompt(input)
    const response = await generate(input)
    console.lo
    setResultdata(response)
    setLoading("false")
    setInput(" ")
  }


  const contextValue = {
    input,
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
    setResultdata
  }
  return (
    <context.Provider value={contextValue}>
      {props.children}
    </context.Provider>
  )
}

export default contextProvider;