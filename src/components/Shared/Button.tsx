import { FaArrowDown, FaArrowUp, FaPencilAlt, FaSearch, FaStreetView } from "react-icons/fa";

type Props = {
    text:string;
    onButtonClickedHandler: () => void;
}

const Button = (props:Props) => {
    const {text, onButtonClickedHandler} = props;

    return(
        <button className={"btn " + text.toLocaleLowerCase() + "-btn"}
                onClick={onButtonClickedHandler}> 
            {{ "Edit" : <FaPencilAlt/>,
               "View" : <FaStreetView/>,
               "Enable" : <FaArrowUp/>,
               "Disable" : <FaArrowDown/>
            }[text]}
            {text}
        </button>
    );
}

export default Button;