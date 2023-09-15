const Home = () => {
  return (
    <div className="flex flex-wrap max-w-[850px] w-full justify-evenly items-center gap-3 z-10">
      <div>
        <div className="flex w-[350px] items-center justify-start">
          <div className="p-2 text-4xl font-bold text-teal-600">Zach</div>
          <div className="text-4xl font-bold">Wong</div>
        </div>
        <div className="text-4xl w-[350px] px-2 font-thin">
          full stack developer
        </div>
        <div className="flex w-[350px] justify-end items-center px-2 gap-1">
          I like to <span className="text-teal-600 ">build</span> cool stuff
        </div>
      </div>
      <img src="memoji.png" className="w-[150px]" />
    </div>
  );
};

export default Home;
