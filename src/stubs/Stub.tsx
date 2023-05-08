import uuid from "react-uuid";
import { departmentDTO } from "../models/dtos/departmentDTO";

export const stb_departmentList : departmentDTO[] = [
    {
        internalID: uuid(),
        name: "IT",
        description: "Vincent",
        status: 0,
        statusDescription: "Enabled",
        createdDate: new Date(),
        modifiedDate: new Date()
    }, 
    {
        internalID: uuid(),
        name: "IT",
        description: "Lesther",
        status: 1,
        statusDescription: "Disabled",
        createdDate: new Date(),
        modifiedDate: new Date()
    }
]