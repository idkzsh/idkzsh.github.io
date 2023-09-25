import Spacer from "@/components/Spacer";
import TechCard from "@/components/tech-card";
import React from "react";
import { SiAutohotkey } from "react-icons/si";

const ImageTool = () => {
  return (
    <>
      <Spacer height="h-[200px]" />
      <div className="z-10 max-w-[1000px] w-[90%] h-[100%] flex flex-wrap-reverse mb-4">
        <div className="flex flex-col w-[49%] min-w-[330px] gap-3">
          <h1 className="text-3xl font-bold">Image Renaming Tool</h1>
          <p>
            I built this tool as a small project to assist my team at BestBuy.
            The purpose was to help massively reduce file renaming times. We had
            to create multiple Tag SKUs based on an original cellphone SKU for
            each carrier. Each original SKU could have anywhere from 5-15
            images, which means each tag SKU must also have those same images
            associated with them. Phone launches can be very secretive, so often
            we won't have a lot of time to have a dev team perform this task,
            which resulted in me creating this tool to allow my team to be able
            to expedite the process!
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
          <img
            src="../imagetool.png"
            alt="image renaming tool"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="z-10 max-w-[1000px] w-[90%] h-[100%]">
        <h2 className="text-xl font-bold">Overview</h2>
        <p className="mb-4">
          The tool uses an excel file with original SKUs and their associated
          Tag SKUs. It then looks at a folder with images that are named for the
          original SKU and stores that data. Then it creates a new folder to
          preserve the original image files and for each tag SKU, it copies over
          the associated original SKUs images over and renames each one to the
          Tag SKU. This was actually surprisingly more complicated than I
          thought it would be (who would think a simple file renaming tool would
          be complicated?) The only unfortunate part is that anything I create
          at BestBuy is considered proprietary to BestBuy and I cannot share the
          code on github.
        </p>
        
        <h2 className="text-xl font-bold">Skills</h2>
            <ul className="px-4 list-disc">
                <li>Identifying a problem and coming up with a solution</li>
                <li>Adapting to a new, unfamiliar language</li>
                <li>Collaborating with team to develop solution in area that I'm not trained in</li>
                <li>Receiving feedback and performing updates and maintenance</li>
            </ul>
      </div>
    </>
  );
};

export default ImageTool;
