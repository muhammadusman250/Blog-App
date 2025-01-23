import { Blog } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl sm:text-4xl py-8 pb-10 font-bold text-center">
        The Collection of Our Blog Posts
      </h1>

      <div className="grid grid-cols-1 gap-12 lg:gap-14 xl:grid-cols-3 md:grid-cols-2">
        {Blog.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-500 transition-all ease-linear w-full"
            >
              <div className="relative">
                <Image
                  className="h-[250px] w-full rounded-tl-xl rounded-tr-xl object-cover"
                  src={item.imgUrl}
                  alt={item.title}
                  width={400} 
                  height={250}
                />
              </div>

              <div className="flex gap-x-6 text-[#727272] px-1 md:px-4 py-3">
                <span className="inline-flex text-[13px] md:text-[16px] gap-x-2 items-center">
                  <MdOutlineDateRange className="w-4 h-4 "/>
                  {item.date}
                </span>
                <span className="inline-flex text-[13px] md:text-[16px] gap-x-2 items-center">
                  <IoIosTimer className="w-4 h-4 " />
                  {item.read}
                </span>
              </div>

              <div className="px-4 pb-4">
                <p className="font-semibold text-[#444343] text-[16px] sm:text-[18px] tracking-wide py-4">
                  {item.title}
                </p>
                <Link
                  href={`/blog/${item.title.toLowerCase().replace(/ /g, "-")}`}
                >
                  <button className="hover:text-blue-700 py-1 inline-flex text-lg font-medium items-center gap-x-2 text-blue-800">
                    Read more
                    <GoArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;
