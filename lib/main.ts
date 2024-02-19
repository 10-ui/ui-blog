import { prisma } from "@/lib/instance";

export const main = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    return Error("DB接続に失敗しました");
  }
};
