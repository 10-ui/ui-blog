import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    return Error("DB接続に失敗しました");
  }
};

//ブログを全て取得するAPI
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const blogs = await prisma.blog.findMany();
    return NextResponse.json(
      {
        message: "success",
        blogs: blogs,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "error",
        err: error,
        blog: [],
      },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};

//ブログを投稿するAPI
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, content } = await req.json();
    await main();
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json(
      {
        message: "success",
        blog,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "error",
        err: error,
      },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};
