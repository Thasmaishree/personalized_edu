import { Router } from 'express';
import axios from 'axios';
const router = Router();

router.post('/', async (req, res) => {
  const { topic } = req.body;

const prompt = `You're an AI tutor who explains complex topics simply.
The student wants to understand: "${topic}".

Please respond with:
1. A beginner-friendly explanation with examples.
2. A relatable analogy or visual image (if possible).
3. A short quiz question to help the student self-check.
4. End by encouraging the learner to ask follow-up questions.`;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', content: 'You are a helpful tutor.' },
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
    res.status(500).json({ error: 'Failed to fetch tutor response' });
  }
});

export default router;
