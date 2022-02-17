import React, {useState} from 'react';
import {Range, getTrackBackground} from 'react-range';
import {useDispatch} from "react-redux";
import {getPacksOfCards} from "../../state/middlewares/packs";

interface IPriceRangeProps {
// loading: boolean;
// error: string;
//
// name: string;
//
// logoutCallback: () => void;
}

export const PriceRange: React.FC<IPriceRangeProps> = (
    {
// loading,
// error,
//
// name,
//
// logoutCallback,
    }
) => {
    const [values, setValues] = useState<number[]>([1, 99]);

    const dispatch = useDispatch()

    const changeValuesHandler = (values: number[]) => {
        setValues(values)
        dispatch(getPacksOfCards())
        console.log(values)
    }

    return (
        <Range
            values={values}
            step={1}
            min={1}
            max={99}
            onChange={changeValuesHandler}
            renderTrack={({props, children}) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '100%',
                        margin: '30px',
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '50%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values: values,
                                colors: ['#ccc', '#548BF4', '#ccc'],
                                min: 1,
                                max: 99
                            }),
                            alignSelf: 'center'
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({index, props, isDragged}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '12px',
                        width: '12px',
                        borderRadius: '1px',
                        backgroundColor: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '-28px',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                            padding: '4px',
                            borderRadius: '4px',
                            backgroundColor: '#548BF4'
                        }}
                    >
                        {values[index].toFixed(0)}
                        {/*// 10.12345 => 10; (1) => 10.1; (2) > 10.12; ...*/}
                    </div>
                    <div
                        style={{
                            height: '16px',
                            width: '5px',
                            backgroundColor: isDragged ? '#548BF4' : '#CCC'
                        }}
                    />
                </div>
            )}
        />
    );
};