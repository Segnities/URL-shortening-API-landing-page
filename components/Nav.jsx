import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
    { id: 0, title: "features" },
    { id: 1, title: "pricing" },
    { id: 2, title: "resources" },

]

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="w-full">
            <div className="hidden md:flex justify-around mt-10">
                <section className="flex justify-between">
                    <h2 className="font-bold text-[2rem] text-dark-violet ">Shortly</h2>
                    <ul className="flex justify-between px-8 items-center">
                        {
                            links.map(link => (
                                <li
                                    className="text-base first-letter:uppercase text-grayish-violet font-semibold  cursor-pointer mx-3 hover:text-very-dark-violet "
                                    key={link.id}>
                                    <a href="#" className="text-base text-white font-semibold cursor-pointer hover:text-grayish-violet first-letter:uppercase" >
                                        {link.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <div className="flex items-center">
                    <button className="font-bold text-base text-grayish-violet mr-6 hover:text-very-dark-violet">Login</button>
                    <button className="font-bold text-base px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-300 text-white">Sign Up</button>
                </div>
            </div>
            <div className="flex md:hidden justify-between px-10 max-h-28 mt-5 items-center">
                <div>
                    <h2 className="font-bold text-2xl text-dark-violet ">Shortly</h2>
                </div>
                <div
                    onClick={() => setShowMenu(!showMenu)}
                    className="cursor-pointer"
                >
                    <RxHamburgerMenu
                        size={28}
                        color="hsl(257, 7%, 63%)"
                        className="cursor-pointer z-10"
                    />
                </div>
            </div>
            {
                showMenu && (
                    <div className="relative md:hidden flex w-full items-center  transition-opacity animate-visible-appear justify-center">
                        <div className="relative flex flex-col w-[90%] justify-center py-3 px-10 rounded-md z-50 bg-[#3b3054] items-center mt-5">
                            <ul>
                                {
                                    links.map(link => (
                                        <li key={link.id} className="flex justify-center items-center p-3">
                                            <a href="#" className="text-base text-white font-semibold cursor-pointer hover:text-grayish-violet first-letter:uppercase" >
                                                {link.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <hr className="w-full border-[#9e9aa7]" />
                            <div className="flex flex-col w-full">
                                <button className="font-bold text-base hover:text-grayish-violet  text-white p-3 my-1">Login</button>
                                <button className="w-full font-bold text-base px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-300 text-white p-3 my-1">Sign Up</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    );
}