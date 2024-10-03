'use client'

import { useParams, usePathname } from "next/navigation";


export default function Cart() {
  const pathName = usePathname();
  console.log(pathName  );
  
    return (
      <div className="">
        <h1>Cart component</h1>
      </div>
    );
  }