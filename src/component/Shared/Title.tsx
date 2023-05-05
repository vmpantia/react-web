import { FaUsers, FaBuilding, FaMapPin } from "react-icons/fa";
import "./Title.css"

type Props = {
    title:string;
    description:string;
}

const Title = (props:Props) => {

    const { title, description} = props;
    return (

        <div className="page-header">
            <div className="icon">
                {{  "Employee" : <FaUsers/>,
                    "Department" : <FaBuilding/>,
                    "Position" : <FaMapPin/>
                }[title]}
            </div>
            <div>
                <div className="title">
                    {title}
                </div>
                <div className="desc">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Title;