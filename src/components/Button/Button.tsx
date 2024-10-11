import "./Button.scss";

interface ButtonProps {
  handleClickButton: () => void
}

export default function Button({ handleClickButton }: ButtonProps) {
  return (
    <section className="randomize-container">
      <div className="randomize-border">
        <button
          className="randomize-button"
          onClick={() => handleClickButton()}
          >
          Rodar
        </button>
      </div>
    </section>
  );
}
