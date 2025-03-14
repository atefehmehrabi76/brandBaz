import React from "react";
import { userStory } from "@/constants/discover";
import Image from "next/image";
import BestSellers from "./(components)/BestSellers";

function page() {
  return (
    <div>
      <section className="flex justify-around mx-22">
        {userStory.map((user) => (
          <div key={user.id}>
            <Image src={user.image} alt={user.name} width={70} height={70} />
            <p className="text-[16px] font-medium">{user.name}</p>
          </div>
        ))}
      </section>
      <BestSellers />
    </div>
  );
}

export default page;
