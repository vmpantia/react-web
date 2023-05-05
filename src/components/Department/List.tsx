import { departmentDTO } from "../../models/dtos/departmentDTO";
import { format } from 'date-fns'
import Button from "../Shared/Button";

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
                        <tr key={data.internalID}>
                            <td><input type="checkbox"></input></td>
                            <td>{data.name}</td>
                            <td>{data.description}</td>
                            <td>
                                <span className={"status " + data.statusDescription}>
                                    {data.statusDescription}
                                </span>
                            </td>
                            <td>{format(data.createdDate, "yyyy/MM/dd")}</td>
                            <td>{format(data.modifiedDate, "yyyy/MM/dd")}</td>
                            <td>
                                <Button text="Edit" onButtonClickedHandler={editButtonClicked} /  >
                                <button>View</button>
                                {data.status === 0 ? 
                                    <button>Disable</button> : 
                                    <button>Enable</button>}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default List;