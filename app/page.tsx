"use client";
import Home from "@/components/Home";
import { useCountStore } from "@/store/CountStore";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  const {count, setCount} = useCountStore();

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
