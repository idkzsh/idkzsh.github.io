const Home = () => {
  return (
    <div className="flex flex-wrap h-[40vh] max-w-[850px] w-full justify-center items-center gap-3">
      <div>
        <div className="flex w-[350px] items-center justify-start">
          <div className="text-teal-600 text-4xl font-bold p-2">Zach</div>
          <div className="text-4xl font-bold">Wong</div>
        </div>
        <div className="text-4xl w-[350px] px-2 font-thin">
          full stack developer
        </div>
        <div className="flex w-[350px] justify-end items-center px-2 gap-1">
          I like to <span className=" text-teal-600">build</span> cool stuff
        </div>
      </div>
      <img src="memoji.png" className="w-[150px]" />
    </div>
  );
};

export default Home;
