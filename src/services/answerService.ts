// TODO
import answerRepository from "../repositories/answerRepository";
import { Answer } from '@prisma/client';

const answerService = {
    createAnswer: async (answer: Answer) => {
        return await answerRepository.createAnswer(answer);
    }
};

export default answerService;