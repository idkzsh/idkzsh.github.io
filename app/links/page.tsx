import LinkCard from "@/components/link-card";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6'

export default function Links() {
  return (
    <>
      <div className="gap-4 flex flex-col items-center justify-center w-[80vw] max-w-[800px] h-[90vh] mb-4">
        <h2 className="flex justify-start min-w-[300px] w-[95%] ">TECH</h2>
        <hr className="border-[0.5px] border-secondary min-w-[300px] w-[95%] " />
        <div className="flex gap-3 flex-wrap w-full justify-center">
          <LinkCard
            title="Linkedin"
            icon={<FaLinkedin />}
            color="text-blue-500"
            bg="bg-blue-500"
          />
          <LinkCard title="Github" bg="bg-card-foreground" icon={<FaGithub />} />
          <LinkCard title="X" bg="bg-card-foreground" color="text-primary" icon={<FaXTwitter />} />
          <LinkCard title="Discord" bg="bg-indigo-500" color="text-indigo-500" icon={<FaDiscord />} />
        </div>
      </div>
    </>
  );
}
