import { useEffect, useState } from "react";

function FreelancerCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/user/domain/Web-Dev")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const card = users.map((user) => (
    <div key={user._id} className="border-2 mb-10 bg-gray-200 rounded-[50px] p-10 w-85 h-60">
      <div key={user._id} className="flex px-14 py-5 gap-6 w-[850px] h-[200px] bg-gray-200 rounded-3xl justify-between">
        <div className="w-36 h-36 bg-slate-400 rounded-full"></div>
         
          <div className="flex flex-col gap-2 justify-evenly text-xl">
            <h1 className="text-center font-bold text-4xl">{user.fullName}</h1>
            <h2 className="text-center font-semibold text-2xl ">Years Of Experience  :  {user.yearsOfExperience}</h2>
            <h3 className="text-center font-semibold text-2xl "> Portfolio: <a href={user.portfolioLink} target="_blank" rel="noopener noreferrer">{user.username}</a></h3>
          </div>
        <div className="pt-[120px]">
         <button className="bg-blue-500 text-white px-10 py-2 rounded-2xl">
             Hire
           </button>
        </div>
      </div>
    </div>
    // <div>
    //   <div
    //     key={user._id}
    //     className="flex px-14 py-5 gap-6 w-[850px] h-[200px] bg-gray-200 rounded-3xl justify-between"
    //   >
    //     <div className="w-36 h-36 bg-slate-400 rounded-full"></div>
    //     <div className="flex flex-col justify-evenly text-xl">
    //       <div className="flex flex-col">
    //         <h1>Name of the Freelancer :</h1>
    //       </div>
    //       <div className="">
    //         <h1>Name of the Freelancer :</h1>
    //       </div>
    //       <div className="">
    //         <h1>Name of the Freelancer :</h1>
    //       </div>
    //     </div>
    //     <div className="pt-[120px]">
    //       <button className="bg-blue-500 text-white px-10 py-2 rounded-2xl">
    //         Hire
    //       </button>
    //     </div>
    //   </div>
    // </div>
  ));

  return <ul>{card}</ul>;
}

export default FreelancerCard;
