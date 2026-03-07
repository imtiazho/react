import React from 'react';
import UpperPart from '../UpperPart/UpperPart';
import MiddlePart from '../MiddlePart/MiddlePart';
import DownMiddle from '../DownMiddle/DownMiddle';
import BottomPart from '../BottomPart/BottomPart';

const Content = () => {
    return (
        <div>
            <UpperPart></UpperPart>
            <MiddlePart></MiddlePart>
            <DownMiddle></DownMiddle>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Content;