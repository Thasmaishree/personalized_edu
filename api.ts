// src/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const askTutor = (topic: string) =>
  API.post('/tutor', { topic });

export const generateCode = (code: string, action: 'generate' | 'explain' | 'debug') =>
  API.post('/code', { code, action });

export const runMockInterview = (topic: string) =>
  API.post('/mock', { topic });
