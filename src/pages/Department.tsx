import { useState } from "react";
import uuid from 'react-uuid'

//Models
import { departmentDTO } from "../models/dtos/departmentDTO";

//Components
import Title from "../components/Shared/Title";
import IconButton from "../components/Shared/IconButton";
import TextArea from "../components/Shared/TextArea";
import TextBox from "../components/Shared/TextBox";
import { format } from "date-fns";
import { FaPlus } from "react-icons/fa";

//Data
import { stb_departmentList } from "../stubs/Stub";

const Department = () => {
    const [departmentList, setDepartmentList] = useState(stb_departmentList as departmentDTO[]);
    const [departmentInfo, setDepartmentInfo] = useState({} as departmentDTO);
    const [modalShow, setModalShow] = useState(false);

    const textChanged = (e:any) => {
        setDepartmentInfo(data => {
            return {...data, [e.target.name]: [e.target.value]}
        });
    }
    const addClicked = () => {
        setModalShow(true);
        setDepartmentInfo({} as departmentDTO);
    }
    const editClicked = (data:departmentDTO) => {
        setModalShow(true);
        setDepartmentInfo(data);
    }
    const enableClicked = (data:departmentDTO) => {
        data.status = 0;
        data.statusDescription = "Enabled";
        data.modifiedDate = new Date();
        updateDepartmentList(data, false);
    }
    const disableClicked = (data:departmentDTO) => {
        data.status = 1;
        data.statusDescription = "Disabled";
        data.modifiedDate = new Date();
        updateDepartmentList(data, false);
    }
    const saveClicked = (e:any) => {
        e.preventDefault();

        let isAdd = departmentInfo.internalID === undefined;
        const data: departmentDTO = {
            internalID: isAdd ? uuid() : departmentInfo.internalID,
            name: departmentInfo.name,
            description: departmentInfo.description,
            status: isAdd ? 0 : departmentInfo.status,
            statusDescription: isAdd ? "Enabled" : departmentInfo.statusDescription,
            createdDate: new Date(),
            modifiedDate: new Date()
        }

        updateDepartmentList(data, isAdd);
        setModalShow(false);
    }
    const cancelClicked = () => {
        setModalShow(false);
    }
    const updateDepartmentList = (data:departmentDTO, isAdd:boolean) => {

        if(isAdd) {
            setDepartmentList([...departmentList, data]);  
            return;
        }

        let currentData = departmentList.filter(x => x.internalID === data.internalID)[0];
        let index = departmentList.indexOf(currentData);
        let tempList = [...departmentList];
        tempList[index] = data;
        setDepartmentList(tempList);
    }
    return (
        <>
            <Title title="Department" 
                description="In this page you can see all the list of department stored in database."/>
            <button onClick={addClicked}>Add</button>
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
                                <td>{<input type="checkbox"></input>}</td>
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
                                    <IconButton text="Edit" onClickedHandler={() => editClicked(data)} /> &nbsp;
                                    <IconButton text="View" onClickedHandler={() => editClicked(data)} /> &nbsp;
                                    {data.status === 0 ? 
                                        <IconButton text="Disable" onClickedHandler={() => disableClicked(data)} />: 
                                        <IconButton text="Enable" onClickedHandler={() => enableClicked(data)} />} &nbsp;
                                    <IconButton text="Delete" onClickedHandler={() => editClicked(data)} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
            { modalShow &&
                <form onSubmit={saveClicked}>
                    <div id="departmentModal" className="modal">
                        <div className="modal-content modal-sm">
                            <div className="modal-header">
                                <FaPlus />
                                Add Department
                            </div>
                            <div className="modal-body">
                                <TextBox name="name" label="Name" placeholder="Enter Department Name" value={departmentInfo.name} onChangedHandler={(e) => textChanged(e)} />
                                <TextArea name="description" label="Description"placeholder="Enter Department Description" value={departmentInfo.description} onChangedHandler={(e) => textChanged(e)}/>
                                <div className="form-buttons">
                                    <button type="submit">Save</button>
                                    <button onClick={cancelClicked}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

export default Department;
