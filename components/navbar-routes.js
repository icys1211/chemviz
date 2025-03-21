"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { isTeacher } from "lib/teacher";
import { SearchInput } from "./search-input";

export const NavbarRoutes = ({ currentProfile }) => {
  const pathname = usePathname();
  const { userId } = useAuth();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapters");
  const isSearchPage = pathname === "/search";

  return (<>
    {isSearchPage && (
      <div className="hidden md:block">
        <SearchInput />
      </div>
    )}
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/learning" legacyBehavior>
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : isTeacher(userId) ? (
        <Link href="/learning/teacher/courses" legacyBehavior>
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      ) : null}

      <UserButton afterSignOutUrl="/" />
    </div>
  </>);
};