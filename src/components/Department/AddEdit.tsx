import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { departmentDTO } from "../../models/dtos/departmentDTO";

type Props = {
    info?:departmentDTO;
    onCancelButtonClickedHandler: () => void;
}

const AddEdit = (props:Props) => {
    const {info, onCancelButtonClickedHandler} = props;
    const [department, setDepartment] = useState<departmentDTO>(info as departmentDTO)

    return(
        <div id="departmentModal" className="modal">
            <div className="modal-content modal-sm">
                <div className="modal-header">
                    <FaPlus />
                    Add Department
                </div>
                <div className="modal-body">
                    <div className="form-input">
                        <label htmlFor="name">Name:</label>
                        <input className="" 
                                type="text" 
                                placeholder="Enter Department Name"
                                name="name" 
                                value ={department.name}/>
                    </div>                                
                    <div className="form-input">
                        <label htmlFor="name">Description:</label>
                        <textarea 
                                rows={5}
                                placeholder="Enter Department Description"
                                name="description" 
                                value ={department.name}/>
                    </div>
                    <div className="form-buttons">
                        <button>Save</button>
                        <button onClick={onCancelButtonClickedHandler}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEdit;