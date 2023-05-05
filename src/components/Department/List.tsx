import { departmentDTO } from "../../models/dtos/departmentDTO";

type Props = {
    dataSource: departmentDTO[];
}

const List = (props:Props) => {
    const { dataSource } = props;
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
                            <td>{data.statusDescription}</td>
                            <td>{data.createdDate.toDateString()}</td>
                            <td>{data.modifiedDate.toDateString()}</td>
                            <td>
                                <button>Edit</button>
                                <button>Disable</button>
                                <button>View</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default List;