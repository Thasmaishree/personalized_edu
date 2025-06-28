import { Router } from 'express';
import axios from 'axios';
const router = Router();

router.post('/', async (req, res) => {
  const { instruction } = req.body;

const prompt = `You're an expert coding assistant.
The user has selected the following action: "${type}" with the input:
"${instruction}"

Respond appropriately based on the action:

If action is "generate":
- Write clean and functional code.
- Explain how it works step by step.
- Point out assumptions or edge cases.
- Suggest improvements or variations.

If action is "explain":
- Clearly explain what this code does.
- Break down logic line by line if needed.
- Mention the purpose of each part.

If action is "debug":
- Identify possible bugs or logical issues.
- Explain why these might fail.
- Suggest fixes with improved code.`;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', content: 'You are a coding assistant and debugger.' },
          { role: 'user', content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(response.data.choices[0].message);
  } catch (err) {
    res.status(500).json({ error: 'Code generation failed' });
  }
});

export default router;
