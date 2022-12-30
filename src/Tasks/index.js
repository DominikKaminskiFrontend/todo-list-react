import "./style.css";

const Tasks = (props) => (
    <ul className="section__tasks">
        {props.tasks.map(task => (
            <li key={task.id} 
            className={`form__li${task.done && props.hideDoneTasks ? " task__button--hide" : ""}`}>
                <button className="task__buttonDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className ={`${task.done ? "task__button--done " : ""}`}> 
                    {task.content} 
                </span>
                <button className="task__buttonRemove">
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;