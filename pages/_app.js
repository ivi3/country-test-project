import 'tailwindcss/tailwind.css'
import {ThemeProvider} from 'next-themes'
import NextNProgress from "nextjs-progressbar";
import {primaryFont} from "../config/typography";
import Header from "../layouts/Header";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider attribute="class">
            <NextNProgress options={{
                showSpinner: false
            }} color="#fa0"/>
            <div className={`${primaryFont.className} pt-20`}>
                <Header/>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}

export default MyApp