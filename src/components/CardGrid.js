import React from 'react';
import { Row, Col } from 'reactstrap';
import { SmallCard } from './Card';

/**
 * React component for a grid of submission cards.
 * @param {Array<StudentSubmission>} submissions Array of submission objects
 * @returns Component for grid of submission cards
 */
export function CardGrid({ submissions }) {
    return (
        <Row md={3} style={{marginTop: '40px'}}>
            {submissions.map((submission, i) => (
                <Col key={`grid-card-${i}`} style={{marginBottom: '40px'}}>
                    <SmallCard key={`grid-card-${i}`} submission={submission} />
                </Col>
            ))}
        </Row>
    );
}