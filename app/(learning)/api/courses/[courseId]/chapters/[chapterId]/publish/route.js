import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { db } from "lib/db";

export async function PATCH(
  req,
  { params }
) {
  try {
    const { courseId, chapterId } = await params;
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const Course = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!Course) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        courseId: courseId,
      },
    });

    const muxData = await db.muxData.findUnique({
      where: {
        chapterId: chapterId,
      },
    });

    if (
      !chapter ||
      !muxData ||
      !chapter.title ||
      !chapter.description ||
      !chapter.videoUrl
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const publishedChapter = await db.chapter.update({
      where: {
        id: chapterId,
        courseId: courseId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedChapter);
  } catch (error) {
    console.log("[CHAPTER_PUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
