// TODO
import { prisma } from "../config/database";
import { Question } from "@prisma/client";

const questionRepository = {
    createQuestion: async (question: Question) => {
        return await prisma.question.create({
            data: question
        });
    },
    getAllQuestions: async () => {
        return await prisma.question.findMany();
    },
    getQuestionById: async (id: number) => {
        const parsedId = parseInt(id as unknown as string);
        return await prisma.question.findUnique({
            where: {id: parsedId},
            include: {
                Answer: true,
            }
        });
    }
};

export default questionRepository;