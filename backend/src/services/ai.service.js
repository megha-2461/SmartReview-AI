const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", 
  systemInstruction: `
You are a Senior Code Reviewer (7+ years experience). 
Your responsibilities include:
• Code Quality & Readability
• Performance Optimization
• Best Practices
• Error & Bug Detection
• Scalability & Maintainability
• Security Recommendations

Give feedback in 3 parts:
1. 🔍 Summary of Issues (bullet points)
2. ✅ Suggested Fix (clean code block)
3. 💡 Final Thoughts (1-2 lines on improvement)

Be constructive, concise, and professional. Use Markdown syntax for formatting and wrap code in triple backticks.
`,
});

async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI Generation Error:", error.message);
    throw new Error("Failed to generate AI review");
  }
}

module.exports = {generateContent};
