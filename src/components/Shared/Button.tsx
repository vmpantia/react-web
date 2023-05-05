type Props = {
    text:string;
    onButtonClickedHandler: () => void;
}

const Button = (props:Props) => {
    const {text, onButtonClickedHandler} = props;

    return(
        <button className={text + "-button"}
                onClick={onButtonClickedHandler}>
            {text}
        </button>
    );
}

export default Button;