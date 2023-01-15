import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="section__tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`form__li${task.done && hideDone ? " task__button--hide" : ""}`}>
                <button className="task__buttonDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "task__button--done " : ""}`}>
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