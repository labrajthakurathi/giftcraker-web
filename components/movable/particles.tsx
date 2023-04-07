import React from "react";

const Particles = ({ height, width, stroke }: any) => {
	return (
		<>
			<svg
				width={width}
				height={height}
				viewBox='0 0 25 11'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M1 1.78762C1.02659 1.57849 1.36691 1.34014 1.53514 1.2669C2.37101 0.902982 3.34368 0.93529 4.19444 1.21858C6.30999 1.92303 8.54401 3.30523 9.1472 5.54544C9.32249 6.19646 9.37587 6.73932 8.79226 7.18814C8.13538 7.6933 7.29755 7.82336 6.49335 7.64981C6.09858 7.56462 5.60313 7.42063 5.29748 7.14519C5.05461 6.92632 4.98601 6.53682 4.94255 6.23258C4.77354 5.04957 5.54885 3.77808 6.41144 3.0116C7.46886 2.07201 8.96884 1.93863 10.3321 2.09093C12.3349 2.31467 14.1765 3.63102 15.6262 4.92808C16.5934 5.79344 17.664 6.89472 17.8978 8.21617C18.0199 8.90632 17.9832 9.74945 17.1524 9.93939C16.0676 10.1874 14.7652 9.65074 14.1573 8.75837C13.2479 7.42344 13.9638 6.21388 15.0228 5.20455C17.3259 3.00939 21.0337 2.55491 24 3.52695'
					stroke={stroke}
					strokeWidth='2'
					strokeLinecap='round'
				/>
			</svg>
		</>
	);
};

export default Particles;