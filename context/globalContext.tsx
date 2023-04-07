import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
export type Itopic = "occasion" | "age" | "relationship";
export type Tags = {
	age: Array<string>;
	relationship: Array<string>;
	occasion: Array<string>;
};
interface GlobalContextTypes {
	trigger: boolean;
	setTrigger: Dispatch<SetStateAction<boolean>>;
	step: number;
	setStep: Dispatch<SetStateAction<number>>;
	qa: Iqa;
	setQa: Dispatch<SetStateAction<Iqa>>;
	tags: Tags | undefined;
	setTags: Dispatch<SetStateAction<Tags | undefined>>;
}

const GlobalContext = createContext<GlobalContextTypes>(
	{} as GlobalContextTypes
);

export type Iqa = {
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
	const [tags, setTags] = useState<Tags>();

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
			value={{ trigger, setTrigger, step, setStep, qa, setQa, tags, setTags }}
		>
			{children}
		</GlobalContext.Provider>
	);
};
