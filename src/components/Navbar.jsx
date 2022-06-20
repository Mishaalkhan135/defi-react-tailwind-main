import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DEC from "../assets/DEC.png";
const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='w-full h-[90px] bg-black'>
			<div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
				<div className='w-32'>
					<img src={DEC} alt='logo' />
				</div>
				<div className='hidden md:flex'>
					<ul className='flex text-white items-center hover:cursor-pointer'>
						<li className='hover:text-red-500 hover:underline'>
							Platform
						</li>
						<li className='hover:text-red-500 hover:underline'>
							Developers
						</li>
						<li className='hover:text-red-500 hover:underline'>
							Community
						</li>
						<li className='hover:text-red-500 hover:underline'>
							About
						</li>
						<button className='ml-4'>Use Defi</button>
					</ul>
				</div>

				{/* Hamburger menu */}
				<div onClick={handleNav} className='block md:hidden'>
					{nav ? (
						<AiOutlineClose size={30} className='text-white' />
					) : (
						<AiOutlineMenu size={30} className='text-white' />
					)}
				</div>

				{/* Mobile Menu */}
				<div
					className={
						nav
							? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
							: "absolute left-[-100%]"
					}
				>
					<ul>
						<li className='text-2xl'>Platform</li>
						<li className='text-2xl'>Developers</li>
						<li className='text-2xl'>Community</li>
						<li className='text-2xl'>About</li>
						<button className='m-8'>Use Defi</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
