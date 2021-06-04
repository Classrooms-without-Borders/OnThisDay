import React from 'react';
import { getAllSubmissions } from '../util';
import { CardGrid } from '../components';

function Gallery() {
    const allSubmissions = getAllSubmissions();

    return (
        <div style={{margin: '150px auto 30px', maxWidth: '90vw'}}>
            <CardGrid submissions={allSubmissions} />
        </div>
    );
}

export default Gallery;