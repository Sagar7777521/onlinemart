"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import GlobalApi from "../utils/GlobalApi";

const Header = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="shadow-md p-5 flex w-full justify-between">
      <div className="flex-1 flex items-center gap-8 mx-auto mt-5">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={100}
          quality={75}
          priority={false}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className=" cursor-pointer md:flex hidden gap-2 items-center border rounded-full p-2 px-10 bg-slate-100">
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <DropdownMenuItem>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    category?.attributes?.icon?.attributes?.url
                  }
                  unoptimized={true}
                  alt="icon"
                  width={23}
                  height={23}
                />
                <h2>{category?.attributes?.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 item-center border rounded-2xl p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag /> 0
        </h2>

        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
