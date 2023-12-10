import Spacer from "@/components/Spacer";
import LinkCard from "@/components/link-card";
import Link from "next/link";
import {IoIosAddCircle} from 'react-icons/io'

const GamePlus = () => {
  return (
    <>
      <Spacer height="h-[200px]" />
      <div className="z-10 max-w-[1000px] w-[90%] h-[100%] flex flex-wrap-reverse mb-4">
        <div className="flex flex-col w-[49%] min-w-[330px] gap-3">
          <h1 className="text-3xl font-bold">GamePlus</h1>
          <Link
            target="_blank"
            href="https://grand-monstera-b8f151.netlify.app/"
          >
            <LinkCard title="View Project" 
            icon={<IoIosAddCircle/>}/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GamePlus;
