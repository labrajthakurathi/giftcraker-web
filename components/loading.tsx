import { Box } from "@/ui-library";
import Spinner from "@/ui-library/components/atom/spinner";

const Loading = () => {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "200px",
			}}
		>
			<Spinner />
		</Box>
	);
};

export default Loading;
