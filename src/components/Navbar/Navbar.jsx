"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import { Toaster, toast } from "sonner";
import styles from "./navbar.module.css";

const Navbar = (props) => {
    const router = useRouter();
    const [icon, setIcon] = useState("bars");
    const [dropdown, setDropdown] = useState();
    const [selected, setSelected] = useState(false);
    const handleIcon = () => {
        icon === "bars" ? setIcon("close") : setIcon("bars");
    };
    // useEffect(() => {
    //   setToken(localStorage.getItem("token"));
    // });

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    let element;
    if (icon === "bars") {
        element = <FaBars />;
    } else {
        element = <IoCloseOutline />;
    }
    const handleLogout = (e) => {
        e.preventDefault();
        // localStorage.removeItem("token");
        setToken();
        toast.success("logged out");
        setTimeout(function () {
            router.push("/");
        }, 1000);
    };
    const handleNavbar = () => {
        let ul = document.querySelector("ul");
        icon === "close"
            ? (ul.classList.add("left-0"), ul.classList.remove("-left-[100%]"))
            : (ul.classList.remove("left-0"), ul.classList.add("-left-[100%]"));
    };
    const handleOnClickLink = () => {
        let ul = document.querySelector("ul");
        icon === "close"
            ? (ul.classList.remove("left-0"),
              ul.classList.add("-left-[100%]"),
              setIcon("bars"))
            : (ul.classList.add("left-0"), ul.classList.remove("-left-[100%]"));
    };

    return (
        <nav className={`sticky top-0 bg-white z-[10]`}>
            {/* <Toaster richColors position="top-right" duration={2000} /> */}
            <div className={`h-16 shadow-md flex flex-row justify-between `}>
                <Link
                    href="/"
                    className="my-auto hover:cursor-pointer ml-4 relative h-12"
                >
                    <img src="/Logo.png" alt="" className="h-full" />
                </Link>

                <div className="my-auto">
                    <h1>ClubHub</h1>
                </div>

                <div className="text-xl flex">
                    {/* {token && ( */}
                    <span
                        className="text-3xl my-auto h-fit cursor-pointer"
                        // onClick={toggleDropdown}
                    >
                        <RiArrowDropDownLine
                            onMouseOver={() => {
                                setDropdown(true);
                            }}
                        />
                    </span>
                    {/* )} */}
                    {dropdown && ( //token
                        <div
                            onMouseOver={() => {
                                setDropdown(true);
                            }}
                            onMouseLeave={() => {
                                setDropdown(false);
                            }}
                            className="absolute top-16 bg-white shadow-lg border py-2 w-40 right-2 rounded-lg my-1"
                        >
                            <ul className="text-sm font-semibold text-center">
                                <li className="hover:bg-orange-200 cursor-pointer">
                                    <span className="px-1">
                                        <Link href="/myaccount">
                                            My account
                                        </Link>
                                    </span>
                                </li>

                                <li className="hover:bg-orange-200 cursor-pointer my-1">
                                    <span className="px-1">
                                        <button
                                            onClick={handleLogout}
                                            href="/orders"
                                        >
                                            Logout
                                        </button>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                    <Link href={"/login"} className={`my-auto mx-2`}>
                        <FaUserCircle />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
