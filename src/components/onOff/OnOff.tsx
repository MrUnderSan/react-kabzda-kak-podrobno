import './onOff.css'

export type OnOffType = {
    onOff?: boolean
};

export const OnOff = (props: OnOffType) => {

    return (

        <div className={'on-off'}>
            <div className={'switch'} style={{backgroundColor: `${props.onOff && 'green'}`}}>on</div>
            <div className={'switch'} style={{backgroundColor: `${!props.onOff && 'red'}`}}>off</div>
            <div className={'circle'} style={{backgroundColor: `${props.onOff ? 'green' : 'red'}`}}></div>
        </div>


    );
};