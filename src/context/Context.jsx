import React, { createContext, useState } from "react";
import run from '../config/gemini'; // Make sure the import path is correct

export const context = createContext();

const ContextProvider = (props) => {
  const [response, setResponse] = useState(""); // State to hold the response from the AI

  // Async function to handle sending the prompt and receiving the result
  const onSent = async (prompt) => {
    const aiResponse = await run(prompt); // Wait for the response from the generative AI
    setResponse(aiResponse); // Update the state with the AI response
  };

  // Example call to onSent to get a response at component initialization
  // (this could be triggered by an event like a button click)
  React.useEffect(() => {
    onSent("what is js");
  }, []); // Empty dependency array ensures it runs once when the component mounts

  const contextValue = {
    response, // Exposing the response in context so it can be used in child components
    onSent, // Exposing the onSent function to send prompts from child components
  };

  return (
    <context.Provider value={contextValue}>
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;
