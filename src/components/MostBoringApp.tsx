import React from "react";

export interface MostBoringAppProps {
  initialValue?: number;
}

export function MostBoringApp({ initialValue }: MostBoringAppProps) {
  const [value, setValue] = React.useState(initialValue ?? 0);

  const onClickHandler = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = target as HTMLButtonElement;
    switch (name) {
      case "increment":
        setValue(value + 1);
        break;
      case "decrement":
        setValue(value - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h3>The Most Boring App Ever</h3>
      <button
        style={{ marginRight: "5px" }}
        onClick={onClickHandler}
        name="increment"
      >
        Increment
      </button>
      <button name="decrement" onClick={onClickHandler}>
        Decrement
      </button>
      <div>
        The current value is:
        <code data-testid="value-content">{value}</code>
      </div>
    </div>
  );
}
