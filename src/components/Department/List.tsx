import { departmentDTO } from "../../models/dtos/departmentDTO";
import { format } from 'date-fns'
import IconButton from "../Shared/IconButton";

type Props = {
    dataSource: departmentDTO[];
}

const List = (props:Props) => {
    const { dataSource } = props;

    const editButtonClicked = () => {
        console.log("edit clicked");
    }

    return (
        <table>
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
                {dataSource.map(data => {
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
                                <IconButton text="Edit" onButtonClickedHandler={editButtonClicked} /> &nbsp;
                                <IconButton text="View" onButtonClickedHandler={editButtonClicked} /> &nbsp;
                                {data.status === 0 ? 
                                    <IconButton text="Disable" onButtonClickedHandler={editButtonClicked} />: 
                                    <IconButton text="Enable" onButtonClickedHandler={editButtonClicked} />} &nbsp;
                                <IconButton text="Delete" onButtonClickedHandler={editButtonClicked} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default List;