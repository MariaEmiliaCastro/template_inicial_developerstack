import { Request, Response } from 'express';
import { Answer } from '@prisma/client';
import questionService from '../services/questionService';
import answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const question = req.body;
  const createdQuestion = await questionService.createQuestion(question);
  res.send('created question');
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
  const questionId = req.params.id;
  const answer = req.body;
  const typeAnswer : Answer = {
    ...answer,
    questionId: parseInt(questionId)
  }
  const createdAnswer = await answerService.createAnswer(typeAnswer);
  res.send('created answer');

}

export async function get(req: Request, res: Response) {
  // TODO
  const question = await questionService.getAllQuestions();
  res.send(question);
}

export async function getById(req: Request, res: Response) {
  // TODO
  const id = req.params.id as unknown as number;
  const question = await questionService.getQuestionById(id);
  res.send(question);
}
