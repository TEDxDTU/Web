import React from 'react';
import About from '../components/About/About';

export async function getStaticProps(ctx) {

    return {
        props: {

        }
    };
};

export default function about() {
    return <About />;
};

