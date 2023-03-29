import Head from "next/head";

type PageHeadProps = {
	title: any;
	description?: string;
	keywords?: Array<string>;
	adId?: Array<string>;
};

export const Metadata = ({
	title,
	description,
	keywords = [],
	adId,
}: PageHeadProps): JSX.Element => {
	const scriptTags = adId?.map((ad: string) => (
		<script
			key={ad}
			src={`//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${ad}`}
		/>
	));

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
				href='https://firebasestorage.googleapis.com/v0/b/gift-craker.appspot.com/o/app%2Flogo-icon.png?alt=media&token=c6e31882-fbdc-43fe-836d-e116eab67fcc'
				type='image/x-icon'
			/>
			<link
				rel='shortcut icon'
				href='https://firebasestorage.googleapis.com/v0/b/gift-craker.appspot.com/o/app%2Flogo-icon.png?alt=media&token=c6e31882-fbdc-43fe-836d-e116eab67fcc'
				type='image/x-icon'
			/>
			<link
				rel='preconnect'
				href='https://fonts.googleapis.com'
			/>
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				//@ts-ignore
				// crossorigin
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700;800;900&display=swap'
				rel='stylesheet'
			></link>
			{scriptTags}
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
