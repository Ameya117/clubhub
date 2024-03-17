"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaCircleArrowRight } from "react-icons/fa6"
const PastEvents = () => {
    const router = useRouter();
    const handleViewAll = () =>{
        router.push("/");
    }
  return (
    <div className="mx-5">
        <div className="flex justify-between">
        <div className="text-3xl m-5 text-black font-semibold  ">Past Events</div>
        <div onClick={handleViewAll} className="text-3xl m-5 flex gap-2 hover:underline hover:cursor-pointer"><span className="text-2xl">View All</span><FaCircleArrowRight/></div>
        </div>

      <hr />

      <div className="flex flex-col gap-3   ">
        <div className="flex  h-[20rem] border-2 rounded-xl     ">
          <div className="min-w-[25rem]">
            <img className="w-full h-full object-cover border-l-2 rounded-l-xl" src="/Jcpl.png" />
          </div>
          <div className="flex flex-col gap-1 p-3">
            <div className="text-2xl font-semibold italic">
              Juvenile Care Premiere League
            </div>
            <div>
                Juvenil Care
            </div>
            <div className="font-light text-slate-500">
                29-02-2024
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio laborum consequuntur maxime nihil doloremque fugit adipisci molestiae, illo eum eius quis nisi ex quidem explicabo animi consequatur dolor similique aliquam. Debitis laudantium repellendus ullam laboriosam. Commodi quasi aliquid id tempore fugit possimus totam quam, nemo quis voluptates facere nam minus, aperiam iusto. Incidunt reiciendis saepe facilis expedita quisquam dignissimos nisi? Eum, harum velit dolorum ea sequi quasi reiciendis, earum fuga sunt odio quod voluptates amet eos sapiente molestias ad unde saepe error sed nobis facilis? In praesentium veniam distinctio voluptate ad. Illo numquam minus amet, similique error molestias explicabo!
            </div>
          </div>
        </div>
        <div className="flex h-[20rem]  border-2 rounded-xl">
            <div className="min-w-[25rem] ">

            
          <img className="w-full h-full object-cover border-l-2 rounded-l-xl" src="/bolt.png" />
          </div>
          <div className="flex flex-col gap-1 p-3">
            <div className="text-2xl font-semibold italic">Bolt 2.0</div>
            <div>
                IEEE
            </div>
            <div className="font-light text-slate-500">
                19/02/2024 - 20/02/24
            </div>
            <div className="">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et atque ad voluptatem iure, voluptatum illo fugit iusto aliquid hic autem temporibus perferendis. Accusantium quas voluptas magnam adipisci ipsam ullam impedit assumenda excepturi maiores dicta unde, repellat cum quisquam incidunt, voluptates nihil sapiente quam quibusdam asperiores pariatur at aliquam, quod ipsum? Dicta earum nostrum ratione. Nesciunt libero, facilis animi ea corrupti dolore, quae earum aliquid deleniti, enim laudantium eligendi nam nobis molestiae dolorum sit! Et voluptatum aliquam nam dolorem iste ipsam ducimus vero dicta ad fugiat? Architecto, numquam minima? Eius assumenda ipsa vitae iure possimus odio a repudiandae ut rem harum.
            </div>
          </div>
        </div>
        <div className="flex h-[20rem]  border-2 rounded-xl ">
            <div className="min-w-[25rem] ">
            <img className="w-full h-full object-cover border-l-2 rounded-l-xl" src="/Techinca.png" />
            </div>

          <div className="flex flex-col gap-1 p-3">
            <div className="text-2xl font-semibold italic">Technica</div>
            <div>
                ISTE
            </div>
            <div className="font-light text-slate-500">
                14/03/2024 - 16/03/2024
            </div>
            <div>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis blanditiis nobis sapiente iure minus vel cumque ut reprehenderit aperiam, magnam sit molestias animi quo error est in obcaecati dolorum adipisci optio voluptatem laborum labore eum facere quod! Doloremque atque eum facilis distinctio pariatur aliquid? Natus culpa ab facilis explicabo praesentium perspiciatis sint rerum tempore iusto. Molestias perspiciatis minima debitis laborum fugit ipsa iste dolorum quas, nihil cumque molestiae sequi assumenda exercitationem fuga necessitatibus facere! Iure corrupti temporibus similique asperiores molestiae laboriosam exercitationem ullam, quaerat sequi tempora necessitatibus alias quibusdam ut deserunt, consequuntur, adipisci dolore a esse enim? Quaerat, minima placeat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
