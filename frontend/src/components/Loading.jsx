import SyncLoader from "react-spinners/SyncLoader";
const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full mb-6">
      <SyncLoader color="#ee0c0c" />
    </div>
  );
};
export default Loading;
