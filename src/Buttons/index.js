import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button className="task__option">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
      </button>
      <button
        className="task__option"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div >
  )

export default Buttons;