import React from 'react';
import Events from '../components/Events/Events';

export async function getStaticProps(ctx) {

    return {
        props: {

        }
    };
};

export default function events() {
    return <Events />;
};

