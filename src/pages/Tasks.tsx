import {Task} from "../data/init-data";
import TaskCard from "../component/TaskCard";

interface Props {
    tasks: Array<Task>
}

const Tasks = ({tasks} : Props) => {
    return <section>
        <h1>TODO List</h1>
        <h2>Aktuální úkoly</h2>
        {tasks.filter(t => !t.done).map( t => <TaskCard task={t} />)}
        <h2>Splněné úkoly</h2>
        {tasks.filter(t => t.done).map( t => <TaskCard task={t} />)}
    </section>
};

export default Tasks;