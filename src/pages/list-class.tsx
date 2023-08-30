import EduworkLogo from '../assets/eduwork-logo.png'
import { useState } from 'react'
import { NavLink } from "react-router-dom"

export default function ListClass() {
    const [isExpand, setIsExpand] = useState(true)

    return (
        <div className="flex flex-row items-stretch h-screen bg-primary-surface w-full">
            {/* left-sidebar */}
            <div className={`h-full bg-white transition-all py-3 ${isExpand ? 'w-1/6' : 'w-[5%]'}`}>
                <img src={EduworkLogo} alt="" className='px-6' />
                <nav className="flex flex-col py-3">
                    <NavLink
                        to="/notifications"
                        className={({ isActive, isPending }) =>
                            `flex flex-row items-center gap-3 px-6 py-3 border-l-4 ${isActive ? 'bg-primary-surface text-primary-main border-primary-main' : 'bg-white text-neutral-70 border-white'}`
                        }
                    >
                        <i className="bi bi-globe"></i>
                        <span>Notifications</span>
                    </NavLink>
                    <NavLink
                        to="/my-class"
                        className={({ isActive, isPending }) =>
                            `flex flex-row items-center gap-3 px-6 py-3 border-l-4 ${isActive ? 'bg-primary-surface text-primary-main border-primary-main' : 'bg-white text-neutral-70 border-white'}`
                        }
                    >
                        <i className="bi bi-bullseye"></i>
                        <span>My Class</span>
                    </NavLink>
                    <NavLink
                        to="/list-class"
                        className={({ isActive, isPending }) =>
                            `flex flex-row items-center gap-3 px-6 py-3 border-l-4 ${isActive ? 'bg-primary-surface text-primary-main border-primary-main' : 'bg-white text-neutral-70 border-white'}`
                        }
                    >
                        <i className="bi bi-laptop"></i>
                        <span>List Class</span>
                    </NavLink>
                </nav>
            </div>

            {/* main content */}
            <div className="w-full">

                {/* topbar */}
                <div className="py-3 px-4 bg-white flex flex-row gap-4">
                    <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-xl font-bold"></i></button>
                    <h1 className="text-xl font-bold">List Community</h1>
                </div>

                {/* main content */}
                <div className='flex flex-col gap-3 p-3'>
                    <div className='flex flex-row gap-3 justify-between items-stretch'>
                        <button className='bg-primary-main rounded-full px-5 py-2 text-white'>Add Class</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
