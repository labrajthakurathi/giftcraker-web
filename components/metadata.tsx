import Head from "next/head";

type PageHeadProps = {
	title: any;
	description?: string;
	keywords?: Array<string>;
};

export const Metadata = ({
	title,
	description,
	keywords = [],
}: PageHeadProps): JSX.Element => {
	return (
		<Head>
			<meta
				name='viewport'
				content='width=device-width'
			/>
			<meta charSet='utf-8' />
			<title>{title} | Gift Craker</title>
			<link
				rel='icon'
				href='https://firebasestorage.googleapis.com/v0/b/giftcraker.appspot.com/o/app%2Flogo-icon.png?alt=media&token=864d3e8d-3285-4407-96c1-87681c508050'
				type='image/x-icon'
			/>
			<link
				rel='shortcut icon'
				href='https://firebasestorage.googleapis.com/v0/b/giftcraker.appspot.com/o/app%2Flogo-icon.png?alt=media&token=864d3e8d-3285-4407-96c1-87681c508050'
				type='image/x-icon'
			/>

			{description?.trim() !== "" && (
				<meta
					name='description'
					content={description}
					key='description'
				/>
			)}
			{keywords?.length > 0 && (
				<meta
					name='keywords'
					content={keywords?.join(",")}
				/>
			)}
		</Head>
	);
};
