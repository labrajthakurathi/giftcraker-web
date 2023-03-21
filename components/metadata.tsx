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
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link
        rel="icon"
        href="https://firebasestorage.googleapis.com/v0/b/product-review-7f644.appspot.com/o/images%2Fapp%2Freviewrly-mascot-small.png?alt=media&token=20798c6e-5818-43ac-8a7a-63adeb6e3f38"
        type="image/x-icon"
      />
      <link
        rel="shortcut icon"
        href="https://firebasestorage.googleapis.com/v0/b/product-review-7f644.appspot.com/o/images%2Fapp%2Freviewrly-mascot-small.png?alt=media&token=20798c6e-5818-43ac-8a7a-63adeb6e3f38"
        type="image/x-icon"
      />

      {description?.trim() !== "" && (
        <meta name="description" content={description} key="description" />
      )}
      {keywords?.length > 0 && (
        <meta name="keywords" content={keywords?.join(",")} />
      )}
    </Head>
  );
};
