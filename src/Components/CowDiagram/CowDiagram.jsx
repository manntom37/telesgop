import React, { useState } from "react";
import cow from "../../Images/cow-blank.jpg";
import Labels from "../Labels/Labels";
import "./CowDiagram.css";
import { useDrop } from "react-dnd";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const LabelList = [
  {
    id: 1,
    label: "Large Intestine",
  },
  {
    id: 3,
    label: "Rumen",
  },
  {
    id: 5,
    label: "Abomasum",
  },
  {
    id: 4,
    label: "Reticulum",
  },
  {
    id: 2,
    label: "Small Intestine",
  },
];

const CowDiagram = () => {
  const [ticks, setTicks] = useState(false);
  const [board, setBoard] = useState([]);
  const [board2, setBoard2] = useState([]);
  const [board3, setBoard3] = useState([]);
  const [board4, setBoard4] = useState([]);
  const [board5, setBoard5] = useState([]);
  const [youWin, setYouWin] = useState(false);
  const [correct1, setCorrect1] = useState(false);
  const [correct2, setCorrect2] = useState(false);
  const [correct3, setCorrect3] = useState(false);
  const [correct4, setCorrect4] = useState(false);
  const [correct5, setCorrect5] = useState(false);

  const addToBoard = (id) => {
    const labelList = LabelList.filter((label) => id === label.id);
    setBoard(labelList);
  };
  const addToBoard2 = (id) => {
    const labelList2 = LabelList.filter((label) => id === label.id);
    setBoard2(labelList2);
  };

  const addToBoard3 = (id) => {
    const labelList3 = LabelList.filter((label) => id === label.id);
    setBoard3(labelList3);
  };

  const addToBoard4 = (id) => {
    const labelList4 = LabelList.filter((label) => id === label.id);
    setBoard4(labelList4);
  };

  const addToBoard5 = (id) => {
    const labelList5 = LabelList.filter((label) => id === label.id);
    setBoard5(labelList5);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver2 }, drop2] = useDrop(() => ({
    accept: "div",
    drop: (item) => addToBoard2(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver3 }, drop3] = useDrop(() => ({
    accept: "div",
    drop: (item) => addToBoard3(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver4 }, drop4] = useDrop(() => ({
    accept: "div",
    drop: (item) => addToBoard4(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver5 }, drop5] = useDrop(() => ({
    accept: "div",
    drop: (item) => addToBoard5(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const handleCheck = () => {
    handleTicks();
    if (
      board[0].label == "Large Intestine" &&
      board2[0].label == "Small Intestine" &&
      board3[0].label == "Rumen" &&
      board4[0].label == "Reticulum" &&
      board5[0].label == "Abomasum"
    ) {
      setYouWin(true);
    } else setYouWin(false);
  };
  const handleTicks = () => {
    setTicks(true);
    if (board[0].label == "Large Intestine") {
      setCorrect1(true);
    }
    if (board2[0].label == "Small Intestine") {
      setCorrect2(true);
    }
    if (board3[0].label == "Rumen") {
      setCorrect3(true);
    }
    if (board4[0].label == "Reticulum") {
      setCorrect4(true);
    }
    if (board5[0].label == "Abomasum") {
      setCorrect5(true);
    }
  };
  return (
    <>
      <img src={cow}></img>
      <div className="Labels">
        {LabelList.map((label) => {
          return <Labels label={label.label} id={label.id} />;
        })}
      </div>

      <div className="dropArea" ref={drop}>
        {correct1 ? <AiFillCheckCircle style={{ color: "green" }} /> : null}
        {!correct1 && ticks ? (
          <AiFillCloseCircle style={{ color: "red" }} />
        ) : null}

        {board.map((label) => {
          return <Labels label={label.label} id={label.id} />;
        })}
      </div>

      <div className="dropArea2" ref={drop2}>
        {correct2 ? <AiFillCheckCircle style={{ color: "green" }} /> : null}
        {!correct2 && ticks ? (
          <AiFillCloseCircle style={{ color: "red" }} />
        ) : null}
        {board2.map((label) => {
          return <Labels label={label.label} id={label.id} />;
        })}
      </div>

      <div className="dropArea3" ref={drop3}>
        {correct3 ? <AiFillCheckCircle style={{ color: "green" }} /> : null}
        {!correct3 && ticks ? (
          <AiFillCloseCircle style={{ color: "red" }} />
        ) : null}
        {board3.map((label) => {
          return <Labels label={label.label} id={label.id} />;
        })}
      </div>

      <div className="dropArea4" ref={drop4}>
        {board4.map((label) => {
          return <Labels label={label.label} id={label.id} />;
        })}
        {correct4 ? <AiFillCheckCircle style={{ color: "green" }} /> : null}
        {!correct4 && ticks ? (
          <AiFillCloseCircle style={{ color: "red" }} />
        ) : null}
      </div>
      <div className="dropArea5" ref={drop5}>
        {board5.map((label) => {
          return <Labels label={label.label} id={label.id} />;
        })}{" "}
        {correct5 ? <AiFillCheckCircle style={{ color: "green" }} /> : null}
        {!correct5 && ticks ? (
          <AiFillCloseCircle style={{ color: "red" }} />
        ) : null}
      </div>
      <div className="checkDiv" onClick={handleCheck}>
        <p className="checkText">Check</p>
      </div>
      {youWin == true && (
        <div className="winDiv">
          <p>
            Gwych! <br></br>
            <br></br>You correctly labelled the cow organs!
          </p>
        </div>
      )}
    </>
  );
};

export default CowDiagram;
