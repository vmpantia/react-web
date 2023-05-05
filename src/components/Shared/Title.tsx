import { FaUsers, FaBuilding, FaMapPin } from "react-icons/fa";

type Props = {
    title:string;
    description:string;
};

const Title = (props:Props) => {

    const { title, description} = props;
    return (
        <div className="title-header">
            <div className="title-icon">
                {{  "Employee" : <FaUsers/>,
                    "Department" : <FaBuilding/>,
                    "Position" : <FaMapPin/>
                }[title]}
            </div>
            <div className="title-info">
                <div className="name">
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