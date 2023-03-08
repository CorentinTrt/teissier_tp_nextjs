import '../styles/globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
