import LinkCard from "@/components/link-card";
import { FaLinkedin, FaGithub, FaDiscord, FaSpotify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from "next/link";


export default function Links() {
  return (
    <>
      <div className="gap-4 flex flex-col items-center justify-center w-[80vw] max-w-[800px] h-[70vh] mb-11">
        <h2 className="flex justify-start min-w-[300px] w-[95%] text-sm">LINKS</h2>
        <hr className="border-[0.5px] border-secondary min-w-[300px] w-[95%] " />
        <div className="flex gap-3 flex-wrap w-full justify-center">
          <Link href="mailto:zachflentgewong@gmail.com">
            <LinkCard
              bg="bg-card-foreground"
              title="Email"
              icon={<MdOutlineAlternateEmail />}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/zach-flentge-wong/"
          >
            <LinkCard
              title="Linkedin"
              icon={<FaLinkedin />}
              color="text-blue-500"
              bg="bg-blue-500"
            />
          </Link>
          <Link target="_blank" href="https://github.com/i-dkz">
            <LinkCard
              title="Github"
              bg="bg-card-foreground"
              icon={<FaGithub />}
            />
          </Link>
          <Link target="_blank" href="https://x.com/_idkzzz">
            <LinkCard
              title="X"
              bg="bg-card-foreground"
              color="text-primary"
              icon={<FaXTwitter />}
            />
          </Link>
          <Link
            target="_blank"
            href="https://discord.com/users/615693931509972993"
          >
            <LinkCard
              title="Discord"
              bg="bg-indigo-500"
              color="text-indigo-500"
              icon={<FaDiscord />}
            />
          </Link>
          <Link
            target="_blank"
            href="https://open.spotify.com/user/4djpn5qmz682f8zitccyfljde?si=1d3752df943d4e60"
          >
            <LinkCard
              title="Spotify"
              bg="bg-green-500"
              color="text-green-500"
              icon={<FaSpotify />}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
