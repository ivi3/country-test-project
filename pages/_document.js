import React from "react";
import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body className="bg-white text-black dark:bg-[#202d36] dark:text-white svg:dark:fill-white">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;