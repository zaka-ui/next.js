'use client'

import Image from "next/image";
import Link from "next/link";
import Products from "./products/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(router);
  function handleNavigate(){
    router.push("products");
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>dezidjzeod</h1>
      <Link href={"products"}>Navigate to product page</Link>
      <h2 className="font-bold mt-3 text-lg">Alternative way of navigatinng</h2>
      <button onClick={handleNavigate}>go to product page</button>

    </div>
  );
}
