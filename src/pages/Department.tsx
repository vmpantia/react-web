import { useState } from "react";

//Models
import { departmentDTO } from "../models/dtos/departmentDTO";

//Components
import Title from "../components/Shared/Title";
import IconButton from "../components/Shared/IconButton";
import Textbox from "../components/Shared/Textbox";
import TextArea from "../components/Shared/TextArea";
import { format } from "date-fns";
import { FaPlus } from "react-icons/fa";

//Data
import { stb_departmentList } from "../stubs/Stub";

const Department = () => {

    const [departmentList, setDepartmentList] = useState(stb_departmentList as departmentDTO[]);
    const [departmentInfo, setDepartmentInfo] = useState({} as departmentDTO);
    const [modalShow, setModalShow] = useState(false);

    const cancelButtonClick = () => {
        setModalShow(false);
    }

    const editButtonClick = (data:departmentDTO) => {
        setModalShow(true);
        setDepartmentInfo(data);
    }

    const textChange = (e:any) => {
        setDepartmentInfo(data => {
            return {...data, [e.target.name]: [e.target.value]}
        });
    }

    return (
        <>
            <Title title="Department" 
                description="In this page you can see all the list of department stored in database."/>
            
            <table className="table">
                <thead>
                    <tr>
                        <th><input type="checkbox"></input></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Created Date</th>
                        <th>Modified Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {departmentList.map(data => {
                        return (
                            <tr key={data.internalID.toString()}>
                                <td><input type="checkbox"></input></td>
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                                <td>
                                    <span className={"status " + data.statusDescription.toLocaleLowerCase() + "-status"}>
                                        {data.statusDescription}
                                    </span>
                                </td>
                                <td>{format(data.createdDate, "yyyy-MM-dd")}</td>
                                <td>{format(data.modifiedDate, "yyyy-MM-dd")}</td>
                                <td>
                                    <IconButton text="Edit" onButtonClickedHandler={() => editButtonClick(data)} /> &nbsp;
                                    <IconButton text="View" onButtonClickedHandler={() => editButtonClick(data)} /> &nbsp;
                                    {data.status === 0 ? 
                                        <IconButton text="Disable" onButtonClickedHandler={() => editButtonClick(data)} />: 
                                        <IconButton text="Enable" onButtonClickedHandler={() => editButtonClick(data)} />} &nbsp;
                                    <IconButton text="Delete" onButtonClickedHandler={() => editButtonClick(data)} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
            { modalShow &&
                <div id="departmentModal" className="modal">
                    <div className="modal-content modal-sm">
                        <div className="modal-header">
                            <FaPlus />
                            Add Department
                        </div>
                        <div className="modal-body">
                            <Textbox name="name" label="Name" value={departmentInfo.name} placeholder="Enter Department Name"  onTextChangedHandler={() => textChange} />                            
                            <TextArea name="description" label="Description" value={departmentInfo.description} placeholder="Enter Department Description" onTextChangedHandler={() => textChange}/>
                            <div className="form-buttons">
                                <button>Save</button>
                                <button onClick={cancelButtonClick}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Department;