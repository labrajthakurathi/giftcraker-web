import { useGlobal } from "@/context/globalContext";
import { Box } from "@/ui-library";
import React, { useState, useEffect } from "react";
import Particles from "./particles";

const Bubble = () => {
	const { trigger } = useGlobal();
	const [rand, setRand] = useState<any>({
		height: "",
		width: "",
		x: "",
		y: "",
		randColor: "",
		randVariant: "",
		randDeg: "",
		randmove: "",
	});

	useEffect(() => {
		let randVariant = Math.floor(Math.random() * 4 + 1);
		let maxX: any = window?.innerWidth;
		let maxY: any = window?.innerHeight;
		let max: any = 1;
		let min: any = 0.3;
		let height: any = Math.random() * (max - min) + min;
		let randColor: any = Math.floor(Math.random() * 8);
		let randmove: any = Math.random() * (100 - -100) + -100;
		let randDeg: any = Math.floor(Math.random() * 361);
		let width: any = Math.random() * (max - min) + min;
		let x: any = Math.random() * (maxX - width - 0) + 0;
		let y: any = Math.random() * (maxY - height - 0) + 0;
		return setRand(() => ({
			height,
			width,
			x,
			y,
			randColor,
			randVariant,
			randDeg,
			randmove,
		}));
	}, []);

	let colors = [
		"#FF8110",
		"#67CCCE",
		"#FF999A",
		"#FF3366",
		"#FFD81A",
		"#FF9A9B",
		"#F96C0D",
	];

	const style = {
		transition: "all 1s ease-in-out",
		width:
			rand.randVariant === 1
				? "10px"
				: `${rand.randVariant === 2 ? "10px" : "15px"}`,
		height:
			rand.randVariant === 1
				? "10px"
				: `${rand.randVariant === 2 ? "20px" : "15px"}`,
		borderRadius:
			rand.randVariant === 1
				? "10px"
				: `${rand.randVariant === 2 ? "0" : "0 0 0 10px"}`,
		background: colors[rand.randColor],
		position: "absolute",
		top: `${rand.y}px`,
		left: `${rand.x}px`,
		transform:
			rand.randVariant === 1
				? `scale(${rand.height})`
				: `scale(${rand.height}) rotate(${rand.randDeg}deg)`,
	};

	const style4 = {
		transition: "all 1s ease-in-out",
		position: "absolute",
		top: `${rand.y}px`,
		left: `${rand.x}px`,
		transform: `scale(${rand.height}) rotate(${rand.randDeg}deg)`,
	};

	return (
		<Box
			sx={{
				transform:
					rand.randVariant === 4
						? `scale(${trigger ? rand.height : 1})`
						: `translateX(${trigger ? rand.randmove + "5px" : "0"})`,
			}}
		>
			<Box sx={{ ...style4 }}>
				{rand.randVariant === 4 ? (
					<Particles
						height='24'
						width='30'
						stroke={colors[rand.randColor]}
					/>
				) : (
					<Box sx={{ ...style }} />
				)}
			</Box>
		</Box>
	);
};

export default Bubble;
