import { MouseEvent, useState } from "react";
import "./App.css";

interface Entry {
  id: number;
  name: string;
  isOpen: boolean;
  children?: Array<Entry>;
}

interface Props {
  entry: Entry;
  depth: number;
}
const Entry = ({ entry, depth }: Props) => {
  const [expanded, setIsExpanded] = useState(false);

  const handleExpand = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setIsExpanded(!expanded);
  };

  return (
    <button onClick={(event) => handleExpand(event)}>
      <div className="list-item" style={{ paddingLeft: `${20}px` }}>
        {entry?.children && ">"} {entry.name}
      </div>
      {expanded &&
        entry.children?.map((entry) => {
          return (
            <div className="list-item" key={entry.id}>
              {entry && <Entry entry={entry} depth={depth + 1} />}
            </div>
          );
        })}
    </button>
  );
};
function App() {
  const data: Array<Entry> = [
    {
      id: 1,
      name: "nodemoduels",
      isOpen: false,
      children: [
        { id: 11, name: "package 1", isOpen: false },
        { id: 12, name: "package 2", isOpen: false },
      ],
    },
    {
      id: 2,
      name: "src",
      isOpen: false,
      children: [
        {
          id: 21,
          name: "components",
          isOpen: false,
          children: [{ id: 22, name: "Table", isOpen: false }],
        },
        {
          id: 24,
          name: "pages",
          isOpen: false,
          children: [{ id: 25, name: "Home", isOpen: false }],
        },
      ],
    },
    {
      id: 3,
      name: "main.tsx",
      isOpen: false,
    },
    {
      id: 4,
      name: "index.css",
      isOpen: false,
    },
  ];

  return (
    <div className="container">
      {data.map((item) => {
        return <Entry key={item.id} entry={item} depth={0} />;
      })}
    </div>
  );
}

export default App;
