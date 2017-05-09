import React from 'react';
import ReactCursorPosition from '../../../dist/ReactCursorPosition';
import PositionLabel from './PositionLabel';
import InstructionsLabel from './InstructionsLabel';

export default () => (
    <ReactCursorPosition className="example__target" >
        <PositionLabel />
        <InstructionsLabel />
    </ReactCursorPosition>
);
