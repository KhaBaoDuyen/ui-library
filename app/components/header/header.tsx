export function Header() {
	return (
		<header className="flex justify-between px-5 py-2 border-[1px] shadow-md items-center">
			<h1 className="font-bold text-3xl">UI Liraby</h1>
			<div className="border-l-[1px] pl-2 flex justify-center items-center ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="30"
					height="30"
					viewBox="0 0 256 256"
					style={{ mixBlendMode: "normal" }}
				>
					<g
						fill="#b4b4b4"
						fillRule="nonzero"
						stroke="none"
						strokeWidth="1"
						strokeLinecap="butt"
						strokeLinejoin="miter"
						strokeMiterlimit="10"
						strokeDasharray=""
						strokeDashoffset="0"
						fontFamily="none"
						fontWeight="none"
						fontSize="none"
					>
						<g transform="scale(10.66667,10.66667)">
							<path d="M9,2c-3.85415,0 -7,3.14585 -7,7c0,3.85415 3.14585,7 7,7c1.748,0 3.34501,-0.65198 4.57422,-1.71875l0.42578,0.42578v1.29297l6,6l2,-2l-6,-6h-1.29297l-0.42578,-0.42578c1.06677,-1.22921 1.71875,-2.82622 1.71875,-4.57422c0,-3.85415 -3.14585,-7 -7,-7zM9,4c2.77327,0 5,2.22673 5,5c0,2.77327 -2.22673,5 -5,5c-2.77327,0 -5,-2.22673 -5,-5c0,-2.77327 2.22673,-5 5,-5z"></path>
						</g>
					</g>
				</svg>

				<input
					type="text"
					className="p-2 w-[250px] placeholder:text-gray-300 outline-none focus:outline-none focus:ring-0 border-gray-400  
                "
					placeholder="Tìm kiếm..."
				/>

				<span className="bg-gray-50 border-2 p-1 border-gray-200 text-gray-400 rounded-md">
					Ctr + K
				</span>
			</div>
		</header>
	);
}
