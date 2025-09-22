import { Data } from "@/Data/DummyData";
import Breadcrumb from "@/components/Blog/Breadcrumb";
import Subscribe from "@/components/Home/Discovery/Subscribe";
import Tags from "@/components/Blog/Tags";
import MoreContent from "@/components/Blog/MoreContent";
import Trends from "@/components/Home/Trends";

export default async function Blog({ params }) {
  const { id } = await params;

  const blog = Data.find((item) => item.attributes.slug === id);
  console.log(blog, "blog");

  if (!blog) {
    return <div className="max-w-2xl mx-auto py-10 mt-20 text-white">Blog not found</div>;
  }

  return (
    <div className=" mt-20 grid grid-cols-12 md:px-20 px-5 text-white">
      <div className="col-span-12 mt-20 mb-10  ">
        <Breadcrumb />
      </div>
      <div className="md:col-span-8 col-span-12 grid gap-5 text-white">
        <div className="cols-span-12 flex items-center text-white">
          <img
            src="/images/watch.png"
            alt=""
            className="mr-2 h-[17px] w-[20px]"
          />
          12.094
        </div>
        <div className="col-span-12 md:text-[60px] text-[30px] font-condensed font-bold uppercase text-white">
          {blog.attributes.title}
        </div>
        <div className="col-span-12 text-[16px] md:text-[25px] font-condensed font-bold uppercase text-white">
          {blog.attributes.desc}
        </div>
        <div className="col-span-12 text-white ">{blog.attributes.content}</div>

        <div className="col-span-12 ">
          <img src={blog.attributes.img} alt="" />
        </div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="col-span-12 text-white">
            {blog.attributes.content}
          </div>
        ))}
        <div className="col-span-1">
          <Tags tags={blog.attributes.tags} />
        </div>
        <div className="col-span-12 flex gap-5 mb-10 text-white">
          <div className="flex gap-2">
            <img src="/images/like.png" alt="" width={26} />
            <b>14 Kişi</b> beğendi
          </div>
          <div className="flex gap-2">
            <img src="/images/commit.png" alt="" /> 3
          </div>
        </div>
        <div className="col-span-12">
          <MoreContent />
        </div>
        <div className="col-span-12">
          <Trends withPadding={false} />
        </div>
      </div>
      <div className="col-span-1 hidden md:block"></div>
      <div className="col-span-3 hidden md:block">
        <Subscribe />
      </div>

      <div className="col-span-12 block md:hidden">
        <Subscribe />
      </div>
    </div>
  );
}
