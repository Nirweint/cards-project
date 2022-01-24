import React from 'react';
import {Button, Checkbox, InputText} from "../../components/common";


export const Test = () => {
    return (
        <div>
            <p>Test page</p>
            <div style={{marginLeft: '10px'}}>
                <Button>Button</Button>
                <Checkbox/>
                <InputText/>
            </div>
        </div>
    );
};