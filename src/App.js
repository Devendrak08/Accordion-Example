import { useState } from "react";
import "./App.css";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleToggle = index => {
    if (selectedIndex === index) {
      return setSelectedIndex(null);
    }

    setSelectedIndex(index);
  };
  return (
    <div className="wrapper">
      <div>
        <h1>Accordion Example</h1>
      </div>
      <div className="accordion">
        {data.map((item, i) => {
          return (
            <div key={i} className="item">
              <div className="title" onClick={() => handleToggle(i)}>
                <h2>
                  {item.question}
                </h2>
                <span>
                  {selectedIndex === i ? "-" : "+"}
                </span>
              </div>
              <div className={selectedIndex === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "Question 2",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "Question 3",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "Question 4",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default App;
