import { Menu } from "lucide-react";
import { Chapter, Course, UserProgress } from "@prisma/client";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "components/ui/sheet";

import { CourseSidebar } from "./course-sidebar";

export const CourseMobileSidebar = ({
  course,
  progressCount,
}) => {


  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition" asChild disabled>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0  w-72">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  )
}