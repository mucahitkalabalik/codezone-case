import { Data } from "@/Data/DummyData";

export default async function Blog({ params }) {
  const { id } = await params;

  console.log(Data, "data");
  console.log(id, "params");

  const blog = Data.find((item) => item.attributes.slug === id);

  if (!blog) {
    return <div className="max-w-2xl mx-auto py-10 mt-20">Blog not found</div>;
  }

  return (
    <div className=" mt-20">
      <h1 className="text-3xl font-bold mb-4">{blog.type}</h1>
      <p className="text-gray-700">{blog.createdAt}</p>
    </div>
  );
}
