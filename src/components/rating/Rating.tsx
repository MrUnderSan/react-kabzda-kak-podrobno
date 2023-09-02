import React from 'react';

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: ValueType
    changeRating: (v: ValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} changeRating={props.changeRating} value={1}/>
            <Star selected={props.value > 1} changeRating={props.changeRating} value={2}/>
            <Star selected={props.value > 2} changeRating={props.changeRating} value={3}/>
            <Star selected={props.value > 3} changeRating={props.changeRating} value={4}/>
            <Star selected={props.value > 4} changeRating={props.changeRating} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    changeRating: (v: ValueType) => void
    value: ValueType
}

function Star(props: StarPropsType) {

    const starStyle = {
        cursor: 'pointer',
        fontWeight: props.selected ? 'bold' : 'normal'
    }

    const onclickHandler = () => {
        props.changeRating(props.value)
    }

    return (
        <span style={starStyle}
              onClick={onclickHandler}
        >Star </span>
    )
}