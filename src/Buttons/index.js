import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button onClick={toggleHideDone} className="button__option">
        {hideDone ? "Pokaż" : "Ukryj"} zakończone
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