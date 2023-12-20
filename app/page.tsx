"use client";
import Home from "@/components/Home";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const reRoute = () => {
    if (count > 0) {
      return;
    } else {
      router.push("/links");
      setCount(count + 1);
    }
  };

  const isMobile = () => {
    return window.innerWidth < 768;
  };

  return (
    <>
      {isMobile() ? (
        reRoute()
      ) : (
        <div className="w-full h-[70vh] flex flex-col items-center justify-center">
          <Home />
        </div>
      )}
    </>
  );
}
