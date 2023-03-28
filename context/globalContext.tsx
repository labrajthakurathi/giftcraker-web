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
	step: number;
	setStep: Dispatch<SetStateAction<number>>;
	qa: Iqa;
	setQa: Dispatch<SetStateAction<Iqa>>;
}

const GlobalContext = createContext<GlobalContextTypes>(
	{} as GlobalContextTypes
);

type Iqa = {
	occasion: string;
	age: string;
	relationship: string;
};
export const useGlobal = () => useContext(GlobalContext);

export const GlobalContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [trigger, setTrigger] = useState<boolean>(false);
	const [step, setStep] = useState<number>(0);

	const [qa, setQa] = useState<Iqa>({
		occasion: "birthday",
		age: "25 - 29",
		relationship: "girlfriend",
	});

	useEffect(() => {
		setTimeout(() => {
			setTrigger(false);
		}, 300);
	}, [trigger === true]);

	return (
		<GlobalContext.Provider
			value={{ trigger, setTrigger, step, setStep, qa, setQa }}
		>
			{children}
		</GlobalContext.Provider>
	);
};
