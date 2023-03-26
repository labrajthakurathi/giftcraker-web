import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<script
				async
				src='//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=8b99de4c-e6a9-4077-b56f-4f61a66bef4d'
			></script>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
