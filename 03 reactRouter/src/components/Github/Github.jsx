// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Dushyant1122")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  console.log(data);
  return (
    <div className="flex justify-center ">
      <img
        src={data.avatar_url}
        alt=""
        width="300px"
        className="rounded-full"
      />
      <div className=" m-4 bg-gray-600 text-white p-4 text-3xl h-52 flex justify-end text-start">
        Github Name : {data.name}
        <br />
        Github followers : {data.followers}
        <br />
        Github Bio : {data.bio}
      </div>
    </div>
  );
};

export default Github;

export const githubData = async () => {
  const response = await fetch("https://api.github.com/users/Dushyant1122");
  return response.json();
};
