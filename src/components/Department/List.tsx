import { departmentDTO } from "../../models/dtos/departmentDTO";
import { format } from 'date-fns'
import IconButton from "../Shared/IconButton";

type Props = {
    dataSource: departmentDTO[];
    editButtonClickedHandler: () => void;
}

const List = (props:Props) => {
    const { dataSource, editButtonClickedHandler } = props;

    return (
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
                                <IconButton text="Edit" onButtonClickedHandler={editButtonClickedHandler} /> &nbsp;
                                <IconButton text="View" onButtonClickedHandler={editButtonClickedHandler} /> &nbsp;
                                {data.status === 0 ? 
                                    <IconButton text="Disable" onButtonClickedHandler={editButtonClickedHandler} />: 
                                    <IconButton text="Enable" onButtonClickedHandler={editButtonClickedHandler} />} &nbsp;
                                <IconButton text="Delete" onButtonClickedHandler={editButtonClickedHandler} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default List;