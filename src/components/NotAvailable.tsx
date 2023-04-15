import { BiError } from "react-icons/bi";
import { ImYoutube2 } from "react-icons/im";

const NotAvailable = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" shadow-red-300 shadow-lg mt-3 flex flex-col items-center h-72 p-10">
        <BiError className="text-5xl w-3/5 m-3 text-red-500" />{" "}
        <h3 className=" text-red-400 font-bold font-serif block">
          {" "}
          No data available
        </h3>
        <h1 className="text-blue-400 font-bold font-mono block">
          Please try later
        </h1>
        <ImYoutube2 className="text-5xl w-3/5 m-3 text-red-700" />
      </div>
    </div>
  );
};

export default NotAvailable;
