import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";

interface GlobalContextTypes {
	trigger: boolean;
	setTrigger: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextTypes>(
	{} as GlobalContextTypes
);
export const useGlobal = () => useContext(GlobalContext);

export const GlobalContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [trigger, setTrigger] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setTrigger(false);
		}, 300);
	}, [trigger === true]);

	return (
		<GlobalContext.Provider value={{ trigger, setTrigger }}>
			{children}
		</GlobalContext.Provider>
	);
};
