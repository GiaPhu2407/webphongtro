"use client";
import Link from "next/link";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MenuIcon } from "lucide-react";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Thêm state cho menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Hàm toggle menu
  };

  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData") as string));
  }, []);

  function onLogout() {
    localStorage.removeItem("userData");
    setUserData(undefined);
  }

  return (
    <div>
      <header className="flex items-center bg-blue-500 justify-between px-4 py-3 bg-background border-b">
        <div className="flex items-center gap-10">
          <div>
            <a href="" className="text-2xl font-bold">
              <span className="text-[#1C30E7]">PhongTroSinhVien</span>
              <span className="text-[#E71C1C]">Top</span>
              <span className="text-[#8D90AC]">.com</span>
            </a>
          </div>
          <ul className="ml-[400px]"> </ul>
        </div>

        <div className="mr-30 flex items-center gap-4">
          {userData ? (
            <div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-sm font-medium">
                      {userData?.name}
                    </div>

                    <Link href={"/ShowPost"}>
                      <Button variant={"blue"} className="me-2">
                        Đăng tin +
                      </Button>
                    </Link>
                    <Button variant={"destructive"} onClick={onLogout}>
                      Logout
                    </Button>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <div className="text-sm font-medium">
                          {userData?.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {userData?.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ) : (
            <div>
              <Link href={"/auth/login"}>
                <Button variant={"green"}>Login</Button>
              </Link>
              <Link href={"/auth/register"}>
                <Button variant={"destructive"} className="ms-2">
                  Register
                </Button>
              </Link>
            </div>
          )}

          {/* <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button> */}
        </div>
      </header>
    </div>
  );
}

// Các icon khác không thay đổi...
