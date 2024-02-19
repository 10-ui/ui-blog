import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const main = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    return Error("DB接続に失敗しました");
  }
};
