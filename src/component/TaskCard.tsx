import {Task} from "../data/init-data";

interface Props {
    task: Task;
}

const TaskCard = ({task} : Props) => {
    return <div>
        <h1>{task.id}:{task.title}</h1>
        <p>{task.description}</p>
        <table>
            <thead>
                <th>
                    <td>Date of creation</td>
                    <td>Date of update</td>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>{task.creationDate.toISOString()}</td>
                    <td>{task.updateDate.toISOString()}</td>
                </tr>
            </tbody>
        </table>
        <label htmlFor="myCheckbox">Splněno</label>
        <input type="checkbox" name="myCheckbox" value="myCheckbox" />
    </div>
};

export default TaskCard;