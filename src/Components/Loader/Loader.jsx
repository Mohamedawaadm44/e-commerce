import React from "react";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center items-center bg-gray-100 absolute  left-0 right-0 top-0 bottom-0 z-10">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
      />
    </div>
  );
}
