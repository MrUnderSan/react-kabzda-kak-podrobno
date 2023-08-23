import React from 'react';

export type valueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: valueType
    changeRating: (v: valueType) => void
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
    changeRating: (v: valueType) => void
    value: valueType
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