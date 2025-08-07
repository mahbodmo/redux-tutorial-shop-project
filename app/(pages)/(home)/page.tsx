import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <Link href={`/products`} className="bg-black text-white p-2 rounded-md">
        Go to products page
      </Link>
    </div>
  );
}
