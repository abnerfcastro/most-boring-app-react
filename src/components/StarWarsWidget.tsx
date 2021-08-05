import React from "react";

interface CharacterAttributes {
  name: string;
}

export function StarWarsWidget() {
  const [loading, setLoading] = React.useState(false);
  const [characters, setCharacters] = React.useState<CharacterAttributes[]>([]);

  const onFetchStarWarsCharactersClick = async () => {
    try {
      let data = { next: "https://swapi.dev/api/people" };
      let charactersAttrs: CharacterAttributes[] = [];

      setLoading(true);

      while (data.next) {
        const response = await fetch(data.next);
        if (response.ok) {
          const { next, results } = await response.json();
          charactersAttrs = [
            ...charactersAttrs,
            ...(results as CharacterAttributes[]),
          ];
          data.next = next;
        } else {
          alert(`Unable to fetch from SWAPI: ${data.next}`);
          break;
        }
      }

      setLoading(false);
      setCharacters([...charactersAttrs]);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const renderContent = loading ? (
    <span>Loading...</span>
  ) : (
    <ul>
      {characters.map(({ name }, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <button
        className="button-primary"
        onClick={onFetchStarWarsCharactersClick}
      >
        Fetch Star Wars Characters
      </button>
      <div>{renderContent}</div>
    </div>
  );
}
