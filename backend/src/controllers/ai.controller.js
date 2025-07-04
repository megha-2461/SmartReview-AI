const { generateContent } = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const { code } = req.body; // Use req.body instead of req.query

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const response = await generateContent(code);
    
    // Send response as string
    res.json({ response: response.toString() });

  } catch (error) {
    console.error("Error in AI response:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
