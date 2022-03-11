import React from 'react';
import About from '../components/About/About';

export async function getStaticProps(ctx) {

    return {
        props: {
            teamsList: []
        }
    };
};

export default function about({ teamsList }) {
    return <About teamsList={teamsList} />;
};

