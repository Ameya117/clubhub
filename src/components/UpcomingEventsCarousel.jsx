import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Clubs = () => {
  const imgs = [
    "/devsoc.jpg",
    "/sae.jpg",
    "/design_odyssey.jpg",
    "/codejencture.jpg",
    "/wirelesswonder.jpg",
    "/prudenta.jpg",
    "/technoquarrel.jpg",
    "/blogathon.jpg",
    "/petroquest.jpg",
  ];
  return (
    <>
      <div className="my-10">
        <h1 className="text-2xl mx-10 mt-10 mb-2 font-semibold">Upcoming Events</h1>
        <hr className="w-[95vw] mx-auto"/>
        <Marquee pauseOnHover speed={150} autoFill className="mt-10">
          <div className="flex flex-row">
            {imgs.map((item) => {
              return (
                <div
                  key={`${item}`}
                  className="mx-4 rounded-xl overflow-hidden border border-black"
                >
                  <Dialog>
                    <DialogTrigger>
                      {" "}
                      <img
                        src={`${item}`}
                        alt={`${item}`}
                        className="h-[35vh] object-cover"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <img
                        src={`${item}`}
                        alt={`${item}`}
                        className="h-70 object-cover"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Clubs;
