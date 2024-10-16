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
      <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
        <div className="flex items-center gap-10">
          <div>
            <a href="" className="text-2xl font-bold">
              <span className="text-[#1C30E7]">PhongTroSinhVien</span>
              <span className="text-[#E71C1C]">Top</span>
              <span className="text-[#8D90AC]">.com</span>
            </a>
          </div>
          <ul className="ml-[400px]">
            {" "}
            <li className="flex items-center">
              <FaRegHeart className="mt-[3px]" />
              <p className="ml-1">Yêu thích</p>
            </li>
          </ul>
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
                        <Link
                          className="text-xs text-muted-foreground"
                          href={"/ShowProfile"}
                        >
                          Thông tin cá nhân
                        </Link>
                        <Link
                          className="text-xs ml-[1px] text-muted-foreground"
                          href={"/auth/changepass"}
                        >
                          Đổi mật khẩu
                        </Link>
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

      <div className="bg-blue-400 pl-[460px] ">
        <nav className="border-gray-200 dark:bg-gray-900 w-full text-center">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <div className="flex justify-center items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleMenu} // Thêm onClick cho nút menu
                aria-expanded={isMenuOpen} // Cập nhật aria-expanded
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between md:flex md:w-auto md:order-1 ${
                isMenuOpen ? "block" : "hidden" // Hiển thị menu dựa trên state
              }`}
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                  <Link
                    href={"/"}
                    className="block py-2 px-4 text-sm text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    TRANG CHỦ
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/ShowRoomForRent"}
                    className="block py-2 px-3 text-sm text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    CHO THUÊ PHÒNG TRỌ
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/ShowRoomForSale"}
                    className="block py-2 px-3 text-sm text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    TIN TỨC
                  </Link>
                </li>
                <li>
                  <Link
                    
                    className="block py-2 px-3 text-sm text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" href={""}                  >
                    LIÊN HỆ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

// Các icon khác không thay đổi...
