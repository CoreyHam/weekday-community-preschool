import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="sticky top-0 z-10 relative flex flex-wrap items-center justify-between px-2 py-3 bg-white m-0 shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-950"
                            to="/"
                        >
                            Weekday Community Preschool
                        </Link>
                        <button
                            className="text-gray-950 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}

                        >
                            <i class="fa-solid fa-bars"></i>

                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-gray-950 hover:text-sky-400"
                                    to="/apply"
                                >Apply
                                </CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-gray-950 hover:text-sky-400"
                                    to="/programs"
                                >Programs
                                </CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-gray-950 hover:text-sky-400"
                                    to="/about"
                                >About
                                </CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}