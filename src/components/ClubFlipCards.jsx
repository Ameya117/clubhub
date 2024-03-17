"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";

const ClubFlipCards = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1((prevState) => !prevState);
  };
  const handleClick2 = () => {
    setIsFlipped2((prevState) => !prevState);
  };
  const handleClick3 = () => {
    setIsFlipped3((prevState) => !prevState);
  };

  const handleClick4 = () => {
    setIsFlipped4((prevState) => !prevState);
  };

  const handleClick5 = () => {
    setIsFlipped5((prevState) => !prevState);
  };

  const handleClick6 = () => {
    setIsFlipped6((prevState) => !prevState);
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * custom,
      },
    }),
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <div className="text-2xl tracking-[0.5rem] opacity-80 font-mono ">
          explore
        </div>
        <div className="text-5xl tracking-[0.5rem] font-mono  ">Clubs</div>
      </div>

      <div className="gap-y-[2rem] grid md:grid-cols-2 lg:grid-cols-3 mt-[2rem]">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
        >
          <ReactCardFlip isFlipped={isFlipped1} flipDirection="verical">
            <div
              onClick={handleClick1}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <h1 className="p-2 text-2xl font-semibold text-center">
                Cultural
              </h1>
              <button>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick1}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>Arts Club</li>
                <li>Music Club</li>
                <li>Dance</li>
                <li>Photography Club</li>
              </div>
              <button>Tap to flip</button>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
        >
          <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
            <div
              onClick={handleClick2}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <h1 className="p-2 text-2xl font-semibold text-center">
                Technical
              </h1>
              <button onClick={handleClick2}>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick2}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>Codechef</li>
                <li>TAM</li>
                <li>GDSC</li>
                <li>Robovitics</li>
              </div>
              <button>Tap to flip</button>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
        >
          <ReactCardFlip isFlipped={isFlipped3} flipDirection="vertical">
            <div
              onClick={handleClick3}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <h1 className="p-2 text-2xl font-semibold text-center">
                Literary and Language
              </h1>
              <button>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick3}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>English Literary Association</li>
                <li>Hindi Literary Association</li>
              </div>
              <button>Tap to flip</button>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
        >
          <ReactCardFlip isFlipped={isFlipped4} flipDirection="vertical">
            <div
              onClick={handleClick4}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <h1 className="p-2 text-2xl font-semibold text-center">
                Sports and Fitness
              </h1>
              <button>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick4}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>Football</li>
                <li>Cricket</li>
              </div>
              <button>Tap to flip</button>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
        >
          <ReactCardFlip isFlipped={isFlipped5} flipDirection="vertical">
            <div
              onClick={handleClick5}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <h1 className="p-2 text-2xl font-semibold text-center">
                Social and Community Service Clubs
              </h1>
              <button onClick={handleClick5}>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick5}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>Juvenile Care</li>
                <li>Anokha</li>
                <li>FEPSI</li>
                <li>BIF</li>
              </div>
              <button onClick={handleClick5}>Tap to flip</button>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial" 
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
        >
          <ReactCardFlip isFlipped={isFlipped6} flipDirection="vertical">
            <div
              onClick={handleClick6}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <h1 className="p-2 text-2xl font-semibold text-center">
                Entrepreneurship and Business
              </h1>
              <button>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick6}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2  rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>ECELL</li>
                <li>Bulls and Bears</li>
              </div>
              <button>Tap to flip</button>
            </div>
          </ReactCardFlip>
        </motion.div>
      </div>
    </>
  );
};
export default ClubFlipCards;
