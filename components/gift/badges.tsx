import { useGlobal } from "@/context/globalContext";
import { Box } from "@/ui-library";
import Badge from "@/ui-library/components/atom/badge";
import React from "react";

const Badges = ({ isDefault, propsData }: any) => {
	const { qa } = useGlobal();
	return (
		<Box
			sx={{
				display: "flex",
				gap: 1,
				my: 2,
				flexWrap: "wrap",
				maxWidth: "500px",
			}}
		>
			{isDefault
				? Object.values(qa).map((item) => (
						<Badge
							label={item}
							key={item}
						/>
				  ))
				: propsData?.tags.map((tag: any) => (
						<Badge
							label={tag}
							key={tag}
						/>
				  ))}
		</Box>
	);
};

export default Badges;
