import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      developer: 'Muneeb Khalid',
      timestamp: new Date().toISOString()
    });
  });

  // Contact API with optional Gemini AI Assessment Draft
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, projectType, budgetRange, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
      }

      console.log(`[Contact Submission] From: ${name} <${email}> | Type: ${projectType} | Budget: ${budgetRange}`);

      let aiAssessment = null;

      if (process.env.GEMINI_API_KEY) {
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are Muneeb Khalid's automated technical AI assistant. A client has submitted a contact request:
Name: ${name}
Project Type: ${projectType || 'General Inquiry'}
Budget Range: ${budgetRange || 'Not specified'}
Message: "${message}"

Write a brief, highly professional 2-3 sentence initial technical reaction and estimated recommended stack/approach for Muneeb to review. Keep it encouraging, engineering-focused, and concise.`,
          });
          aiAssessment = response.text;
        } catch (genAiErr) {
          console.warn('Gemini AI Assessment generation skipped:', genAiErr);
        }
      }

      return res.json({
        success: true,
        message: 'Thank you for reaching out! Muneeb Khalid will get back to you shortly.',
        aiAssessment,
        timestamp: new Date().toISOString()
      });
    } catch (err: any) {
      console.error('Error handling contact submission:', err);
      return res.status(500).json({ error: 'Failed to process message.' });
    }
  });

  // Interactive AI Assistant Q&A about Muneeb Khalid
  app.post('/api/ai-assistant', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required.' });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.json({
          reply: `Muneeb Khalid is a Full-Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, MySQL, and React Native. He built major platforms like TalkingBat (sports analytics), Medicsi (healthcare booking), and MyIslamicSpouse (social matrimonial platform). Contact him at syedmuneebkhalid5@gmail.com!`
        });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const systemContext = `You are the AI Assistant on Muneeb Khalid's portfolio website. Muneeb is a Full-Stack Developer & Software Engineer.
Key details about Muneeb:
- Core Stack: MERN Stack (MongoDB, Express, React, Node.js), Next.js, TypeScript, MySQL, React Native, Tailwind CSS, FastAPI.
- Key Projects:
  1. TalkingBat: Sports Analytics SaaS with cricket analytics dashboards, ball-by-ball pitch maps, wagon wheels, beehives, catching maps, video syncing. Uses Next.js, React, Node, Express, MySQL, MongoDB.
  2. MyIslamicSpouse: Privacy-first social & matrimonial discovery platform with JWT auth, multi-criteria filtering, mutual connection flows. Uses React, Node, Express, MongoDB.
  3. Medicsi: Hospital management system for doctor scheduling, appointment locks, patient records, role-based dashboards. Uses React, Node, Express, MongoDB.
- GitHub: https://github.com/SYEDMUNEEEB
- LinkedIn: https://www.linkedin.com/in/muneebkhalid05/
- Email: syedmuneebkhalid5@gmail.com
- Status: Available for selected freelance/client projects, full-stack web applications, SaaS products, and API systems.

Answer the user's question clearly, concisely, and professionally. Focus on Muneeb's technical depth, architecture skills, and real-world results.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `${systemContext}\n\nUser Question: ${prompt}`,
      });

      return res.json({ reply: response.text });
    } catch (err: any) {
      console.error('Error in AI assistant route:', err);
      return res.status(500).json({ error: 'AI Assistant currently unavailable.' });
    }
  });

  // Vite integration in Dev / Static serving in Prod
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
