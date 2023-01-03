import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button className="button__option">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
      </button>
      <button
        className="button__option"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;