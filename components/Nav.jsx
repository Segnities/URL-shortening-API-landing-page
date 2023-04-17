
const links = [
    { id: 0, title: "feature" },
    { id: 1, title: "pricing" },
    { id: 2, title: "resources" },

]

export default function Nav() {
    return (
        <header className="">
            <div className="hidden md:flex justify-around max-h-28 mt-5">
                <section className="flex justify-between">
                    <h2 className="font-bold text-[2rem] text-very-dark-violet ">Shortly</h2>
                    <ul className="flex justify-between px-8 items-center">
                        {
                            links.map(link => (
                                <li
                                    className="text-sm first-letter:uppercase text-grayish-violet font-semibold  cursor-pointer mx-3 hover:text-very-dark-violet "
                                    key={link.id}>
                                    {link.title}
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <div className="flex items-center">
                    <button className="font-bold text-grayish-violet mr-4 hover:text-very-dark-violet">Login</button>
                    <button className="font-bold px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-300 text-white">Sign Up</button>
                </div>
            </div>
        </header>
    );
}