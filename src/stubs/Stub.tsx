import { departmentDTO } from "../models/dtos/departmentDTO";

export const stb_departmentList : departmentDTO[] = [
    {
        internalID: "test",
        name: "IT",
        description: "Vincent",
        status: 0,
        statusDescription: "Enabled",
        createdDate: new Date(),
        modifiedDate: new Date()
    }, 
    {
        internalID: "tae",
        name: "IT",
        description: "Lesther",
        status: 1,
        statusDescription: "Disabled",
        createdDate: new Date(),
        modifiedDate: new Date()
    }
]