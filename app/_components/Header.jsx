import Image from "next/image";
import { LayoutGrid, Search } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="flex-1 flex items-center gap-8 mx-auto mt-5">
        <Image src="/logo.png" alt="Logo" width={150} height={100} />

        <h2 className="flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200">
          <LayoutGrid className="h-5 w-5 " /> Category
        </h2>
        <div className="flex gap-3 item-center border rounded-2xl p-2 px-5 ">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
    </div>
  );
};

export default Header;
