import React, {useState} from 'react';

type valueType = 0 | 1 | 2 | 3 | 4 |5

type RatingPropsType = {
}

export function UncontrolledRating(props: RatingPropsType) {

    const [value, setValue] = useState<valueType>(0)

    const onClickHandler = (v: valueType) => {
        setValue(v)
    }

    return (
        <div>
            <Star selected={ value > 0 }/><button onClick={()=>onClickHandler(1)}>1</button>
            <Star selected={ value > 1 }/><button onClick={()=>onClickHandler(2)}>2</button>
            <Star selected={ value > 2 }/><button onClick={()=>onClickHandler(3)}>3</button>
            <Star selected={ value > 3 }/><button onClick={()=>onClickHandler(4)}>4</button>
            <Star selected={ value > 4 }/><button onClick={()=>onClickHandler(5)}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    if (props.selected) {
        return (
            <span><b>Star </b></span>
        )
    } else {
        return (
            <span>Star </span>
        )
    }

}