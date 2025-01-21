// Import necessary modules
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Use an environment variable for the API key (fallback for testing only)
const apiKey = process.env.GEMINI_API_KEY || "AIzaSyDlAsCqsSd64gNBLV4WLiCSDZVlMar0Yzk"; // DO NOT hardcode in production

// Initialize the generative AI client
const genAI = new GoogleGenerativeAI(apiKey);

// Set up the model configuration
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", // Ensure this model name is correct
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain", // Adjust if necessary
};

// Function to run the generative AI with a prompt
async function run(prompt) {
  try {
    // Start a chat session with the generation config
    const chatSession = await model.startChat({
      generationConfig,
      history: [], // Provide chat history if required
    });

    // Send a message to the model with the given prompt
    const result = await chatSession.sendMessage(prompt);

    // Return the AI's response text
    return result.response.text();
  } catch (error) {
    // Log the error for debugging
    console.error("Error in running generative AI:", error);

    // Return a fallback error message
    return "Error in AI response";
  }
}

export default run;
