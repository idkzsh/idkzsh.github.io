import Spacer from "@/components/Spacer";
import LinkCard from "@/components/link-card";
import Link from "next/link";
import { BsGit } from "react-icons/bs";
import { SiEventstore } from "react-icons/si";

const NxtStore = () => {
  return (
    <>
      <Spacer height="h-[200px]" />
      <div className="z-10 max-w-[1000px] w-[90%] h-[100%] flex flex-wrap-reverse mb-4">
        <div className="flex flex-col w-[49%] min-w-[330px] gap-3">
          <h1 className="text-3xl font-bold">nxtStore</h1>
          <Link
            target="_blank"
            href="https://nxt-store.vercel.app/"
          >
            <LinkCard title="View Project" 
            icon={<SiEventstore/>}/>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/i-dkz/nxtStore"
          >
            <LinkCard title="View Git Repo" 
            icon={<BsGit />}
            bg="bg-orange-600"
            opacity={10}
            color="text-orange-600"/>
            
          </Link>
        </div>
      </div>
    </>
  );
};

export default NxtStore;
