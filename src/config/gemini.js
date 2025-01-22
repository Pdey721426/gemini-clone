import  { GoogleGenerativeAI }  from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDfXp2wXP4YN1Xpo2Y86Bo9oeq7lW5S0lE");
  
const generate = async(prompt) =>{
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt2 = prompt;

  const result = await model.generateContent(prompt2);
  return result.response.text();
  console.log(result.response);
  console.log(result.response.text());
}

export default generate;