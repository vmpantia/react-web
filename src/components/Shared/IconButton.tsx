import { FaArrowDown, FaArrowUp, FaPencilAlt, FaSearch, FaStreetView, FaTrash, FaTrashAlt } from "react-icons/fa";

type Props = {
    text:string;
    onButtonClickedHandler: () => void;
}

const IconButton = (props:Props) => {
    const {text, onButtonClickedHandler} = props;

    return(
        <button className={"icon-btn " + text.toLocaleLowerCase() + "-btn"}
                title={text}
                onClick={onButtonClickedHandler}> 
            {{ "Edit" : <FaPencilAlt/>,
               "View" : <FaStreetView/>,
               "Enable" : <FaArrowUp/>,
               "Disable" : <FaArrowDown/>,
               "Delete" : <FaTrashAlt/>
            }[text]}
        </button>
    );
}

export default IconButton;