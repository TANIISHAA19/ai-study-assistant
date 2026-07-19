import ai from "../config/gemini.js";

export const generateStudyPlan = async (req, res) => {
  try {
    const { subject, duration, level } = req.body;

    if (!subject || !duration || !level) {
      return res.status(400).json({
        error: "Subject, duration and level are required."
      });
    }

    const prompt = `
You are an expert AI Study Planner.

Create a study plan.

Subject: ${subject}
Duration: ${duration}
Level: ${level}

Return ONLY valid JSON.

Example:

{
  "Week 1": [
    "Topic A",
    "Topic B"
  ],
  "Week 2": [
    "Topic C",
    "Topic D"
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const text = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const plan = JSON.parse(text);

    res.json({
      plan,
    });

  } catch (error) {
    console.error("Planner Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};