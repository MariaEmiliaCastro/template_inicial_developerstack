import { prisma } from "../config/database";
import { Answer } from '@prisma/client';

const answerRepository = {
    createAnswer: async (answer: Answer) => {
        // TODO
        return await prisma.answer.create({
            data: answer
        });
    }
};

export default answerRepository;