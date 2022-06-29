/* eslint-disable react/no-children-prop */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import * as React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <Head>
                <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/tocas/4.0.4/tocas.min.css' />
                <script src='https://cdnjs.cloudflare.com/ajax/libs/tocas/4.0.4/tocas.min.js'></script>
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    );
}

export default MyApp;
