import { db } from "lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({
  params
}) => {
  const { courseId } = await params
  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: "asc"
        }
      }
    }
  });

  if (!course) {
    return redirect("/learning/search");
  }

  return redirect(`/learning/courses/${course.id}/chapters/${course.chapters[0].id}`);
}

export default CourseIdPage;