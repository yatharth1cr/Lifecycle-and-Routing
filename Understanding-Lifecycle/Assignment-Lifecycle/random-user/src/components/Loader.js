import { ThreeCircles } from "react-loader-spinner";

function Loader() {
  return (
    <ThreeCircles
      visible={true}
      height="200"
      width="200"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        height: "370px", // Full height to center within the container
      }}
      wrapperClass=""
    />
  );
}
export default Loader;
