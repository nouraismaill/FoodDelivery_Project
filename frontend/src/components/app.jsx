import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";

export const MyComponent = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
    <>
      <div className="flex items-center justify-center gap-4  py-10">
        <div className="text-nowrap">
          <GooglePlayButton
            url={APKUrl}
            theme={"light"}
            className={"custom-style  "}
          />
        </div>
        <div>
          <AppStoreButton
            url={APKUrl}
            theme={"dark"}
            className={"custom-style"}
          />
        </div>
      </div>
    </>
  );
};
