import { useState } from "react";

//Models
import { departmentDTO } from "../models/dtos/departmentDTO";

//Components
import Title from "../components/Shared/Title";
import List from "../components/Department/List";
import AddEdit from "../components/Department/AddEdit";

//Data
import { stb_departmentList } from "../stubs/Stub";

const Department = () => {

    const [departmentList, setDepartmentList] = useState(stb_departmentList as departmentDTO[]);
    const [modalShow, setModalShow] = useState(false);

    const cancelButtonClick = () => {
        setModalShow(false);
    }
    const editButtonClick = () => {
        setModalShow(true);
    }

    return (
        <>
            <Title title="Department" 
                description="In this page you can see all the list of department stored in database."/>
            <List dataSource={departmentList} editButtonClickedHandler={editButtonClick} />
            {modalShow && <AddEdit onCancelButtonClickedHandler={cancelButtonClick}  />}
        </>
    );
}

export default Department;