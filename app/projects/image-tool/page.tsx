import TechCard from "@/components/tech-card";
import React from "react";
import { SiAutohotkey } from "react-icons/si";

const ImageTool = () => {
  return (
    <div className="flex min-h-screen">
        <div className="z-10 max-w-[1000px] w-[90%] flex flex-wrap-reverse">
          <div className="flex flex-col w-[49%] min-w-[330px] gap-3">
            <h1 className="text-3xl font-bold">Image Renaming Tool</h1>
            <p>
              I built this tool as a small project to assist my team at BestBuy. The
              purpose was to help massively reduce file renaming times. We had to
              create multiple Tag SKUs based on an original cellphone SKU for each
              carrier. Each original SKU could have anywhere from 5-15 images, which
              means each tag SKU must also have those same images associated with
              them. Phone launches can be very secretive, so often we won't have a
              lot of time to have a dev team perform this task, which resulted in me
              creating this tool to allow my team to be able to expedite the process!
            </p>
            <h2 className="text-xl font-bold">Built with:</h2>
            <TechCard
              icon={<SiAutohotkey />}
              title="AutoHotKey"
              bg="bg-green-500"
              color="text-green-500"
            />
          </div>
          <div className="flex max-w-[500px] justify-end mb-4">
            <img src="../imagetool.png" alt="" />
          </div>
        </div>
    </div>
  );
};

export default ImageTool;
