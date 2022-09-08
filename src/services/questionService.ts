// TODO
import { Question } from '@prisma/client';	
import questionRepository from '../repositories/questionRepository';


const questionService = {
    createQuestion: async (question: Question) => {
        return await questionRepository.createQuestion(question);
    },
    getAllQuestions: async () => {
        // TODO
        return await questionRepository.getAllQuestions();
    },
    getQuestionById: async (id: number) => {
        // TODO
        return await questionRepository.getQuestionById(id);
    }
};

export default questionService;
