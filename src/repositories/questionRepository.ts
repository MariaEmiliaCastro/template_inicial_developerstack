// TODO
import { prisma } from "../config/database";
import { Question } from "@prisma/client";
import { number } from "joi";

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
        return await prisma.question.findUnique({
            where: {id : 1},
            include: {
                Answer: true,
            }
        });
    }
};

export default questionRepository;