import Spacer from "@/components/Spacer";

const GamePlus = () => {
  return (
    <>
      <Spacer height="h-[200px]" />
      <div className="z-10 max-w-[1000px] w-[90%] h-[100%] flex flex-wrap-reverse mb-4">
        <div className="flex flex-col w-[49%] min-w-[330px] gap-3">
          <h1 className="text-3xl font-bold">Image Renaming Tool</h1>
        </div>
      </div>
    </>
  );
};

export default GamePlus;
