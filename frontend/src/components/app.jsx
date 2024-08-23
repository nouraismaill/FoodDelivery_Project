export const MyComponent = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
    <header className="ezy__header3 light py-20 md:py-36 text-white bg-[#FF6045] ">
      <div className="container px-4 relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <h2 className="text-2xl leading-none md:text-[50px] md:text-nowrap font-bold mb-6">
              For Better Experience Download
            </h2>
            <p className="text-2xl leading-none md:text-[70px] font-bold mb-6">
              Tomato App
            </p>

            <div className="flex items-center justify-center mt-12">
              <a href="#!" className="shadow m-1">
                <img
                  src="https://cdn.easyfrontend.com/pictures/hero/play-app-android.png"
                  alt=""
                />
              </a>
              <a href="#!" className="shadow m-1">
                <img
                  src="https://cdn.easyfrontend.com/pictures/hero/play-app-apple.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
