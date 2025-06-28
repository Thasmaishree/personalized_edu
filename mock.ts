import { Router } from 'express';
import axios from 'axios';
const router = Router();

router.post('/', async (req, res) => {
  const { role } = req.body;

  const prompt = `You're an experienced technical interviewer.
The candidate is interviewing for a role in: "${role}".

Please generate a set of 6 interview questions:
- 4 technical questions relevant to the domain.
- 2 behavioral questions.

After each question, include:
- An example or sample answer (imagined).
- Constructive feedback on that answer.

Make the tone realistic and professional.`;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', content: 'You are an expert interviewer.' },
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
    console.error(err);
    res.status(500).json({ error: 'Mock interview generation failed' });
  }
});

export default router;