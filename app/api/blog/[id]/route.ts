import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const main = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    return Error("DB接続に失敗しました");
  }
};

//ブログを探して取得するAPI
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    console.log(id);
    await main();
    const blog = await prisma.blog.findFirst({
      where: { id: id },
    });
    return NextResponse.json(
      {
        message: "success",
        blog: blog,
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

//ブログを探して編集するAPI
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    const { title, content } = await req.json();
    const updatedAt = new Date().toISOString();
    await main();
    const blog = await prisma.blog.update({
      where: { id: id },
      data: {
        title,
        content,
        updatedAt,
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
        blog: [],
      },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};

//ブログを探して削除するAPI
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    await main();
    const blog = await prisma.blog.delete({
      where: { id: id },
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
        blog: [],
      },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};
