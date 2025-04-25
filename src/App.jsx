import blankDiagram from './assets/blank_diagram.png'
import craigDiagram from './assets/craig.jpg'
import classes from './css/app.module.css'
import { useState, useEffect } from 'react'

function App() {
  const answerData = {
    temperatures: [
      {
        id: "temperature_1",
        answer: "1341",
        top: "485px",
        left: "50px"
      },
      {
        id: "temperature_2",
        answer: "1414",
        top: "455px",
        left: "50px"
      },
      {
        id: "temperature_3",
        answer: "1674",
        top: "385px",
        left: "50px"
      },
      {
        id: "temperature_4",
        answer: "2098",
        top: "274px",
        left: "50px"
      },
      {
        id: "temperature_5",
        answer: "2541",
        top: "145px",
        left: "50px"
      },
      {
        id: "temperature_6",
        answer: "2800",
        top: "85px",
        left: "50px"
      },
    ],
    carbonPercentages: [
      {
        id: "carbon_percentage_1",
        answer: "0",
        top: "640px",
        left: "188px"
      },
      {
        id: "carbon_percentage_2",
        answer: "0.8",
        top: "640px",
        left: "284px"
      },
      {
        id: "carbon_percentage_3",
        answer: "1.7",
        top: "640px",
        left: "408px"
      },
      {
        id: "carbon_percentage_4",
        answer: "2.0",
        top: "640px",
        left: "450px"
      },
      {
        id: "carbon_percentage_5",
        answer: "4.3",
        top: "640px",
        left: "749px"
      },
      {
        id: "carbon_percentage_6",
        answer: "6.67",
        top: "640px",
        left: "1057px"
      }
    ],
    majorLabels: [
      {
        id: "major_label_1",
        answer: "Carbon Steel",
        top: "690px",
        left: "325px"
      },
      {
        id: "major_label_2",
        answer: "Cast Iron",
        top: "690px",
        left: "731px"
      },
      {
        id: "major_label_3",
        answer: "Liquid",
        top: "113px",
        left: "680px",
        inputWidth: "5rem"
      },
      {
        id: "major_label_4",
        answer: "Liquid and Austenite",
        top: "211px",
        left: "494px"
      },
      {
        id: "major_label_5",
        answer: "Austenite",
        top: "284px",
        left: "290px",
        inputWidth: "6rem"
      },
      {
        id: "major_label_6",
        answer: "Solidus",
        top: "260px",
        left: "552px",
        inputWidth: "7rem"
      },
      {
        id: "major_label_7",
        answer: "Austenite and Ferrite",
        top: "378px",
        left: "275px",
        inputWidth: "11rem"
      },
      {
        id: "major_label_8",
        answer: "Solvus",
        top: "542px",
        left: "234px",
        inputWidth: "5rem"
      },
      {
        id: "major_label_9",
        answer: "Ferrite and Pearlite",
        top: "579px",
        left: "234px",
        inputWidth: "10rem"
      },
      {
        id: "major_label_10",
        answer: "Liquidus",
        top: "171px",
        left: "730px",
        inputWidth: "8rem"
      },
      {
        id: "major_label_11",
        answer: "eutectic",
        top: "324px",
        left: "661px",
        inputWidth: "8rem"
      },
      {
        id: "major_label_12",
        answer: "eutectoid",
        top: "501px",
        left: "350px",
        inputWidth: "8rem"
      },
      {
        id: "major_label_13",
        answer: "100% pearlite",
        top: "544px",
        left: "375px",
        inputWidth: "8rem"
      },
      {
        id: "major_label_14",
        answer: "Austenite and Cementite",
        top: "391px",
        left: "543px",
        inputWidth: "12rem"
      },
      {
        id: "major_label_15",
        answer: "Pearlite and Cementite",
        top: "540px",
        left: "593px",
        inputWidth: "12rem"
      },
      {
        id: "major_label_16",
        answer: "Liquid and Cementite",
        top: "193px",
        left: "937px",
        inputWidth: "12rem"
      },
      {
        id: "major_label_17",
        answer: "100% ferrite",
        top: "543px",
        left: "102px",
        inputWidth: "10rem"
      },
      {
        id: "major_label_18",
        answer: "Delta Iron and Liquid",
        top: "68px",
        left: "312px",
        inputWidth: "12rem"
      },
      {
        id: "major_label_19",
        answer: "Delta Iron",
        top: "114px",
        left: "99px",
        inputWidth: "9rem"
      },
      {
        id: "major_label_20",
        answer: "Delta Iron and Austenite",
        top: "207px",
        left: "255px",
        inputWidth: "12rem",
      }
    ],
    minorLabels: [
      {
        id: "minor_label_1",
        answer: "Acm",
        top: "321px",
        left: "414px",
        inputWidth: "3rem"
      },
      {
        id: "minor_label_2",
        answer: "Ac1,2,3",
        top: "460px",
        left: "549px",
        inputWidth: "3rem"
      },
      {
        id: "minor_label_3",
        answer: "Ac3",
        top: "444px",
        left: "281px",
        inputWidth: "3rem"
      },
      {
        id: "minor_label_4",
        answer: "Ac1",
        top: "490px",
        left: "237px",
        inputWidth: "3rem"
      },
      {
        id: "minor_label_5",
        answer: "Ac2",
        top: "442px",
        left: "218px",
        inputWidth: "3rem"
      }
    ],
    zones: [
      {
        id: "zone_1",
        answer: "Hypoeutectoid",
        top: "602px",
        left: "225px",
        inputWidth: "8rem",
      },
      {
        id: "zone_2",
        answer: "Hypereutectoid",
        top: "602px",
        left: "350px",
        inputWidth: "8rem",
      },
      {
        id: "zone_3",
        answer: "Hypoeutectic",
        top: "602px",
        left: "580px",
        inputWidth: "8rem",
      },
      {
        id: "zone_4",
        answer: "Hypereutectic",
        top: "602px",
        left: "900px",
        inputWidth: "8rem",
      }
    ]
  }

  function getMountSelections(){
    const mountSelections = {}
    for (const key in answerData) {
      for (const answer of answerData[key]) {
        mountSelections[answer.id] = {
          selection: "",
          correct: "ungraded"
        }
      }
    }
    return mountSelections
  }

  const [quizSelections, setQuizSelections] = useState(getMountSelections());
  const [quizGrade, setQuizGrade] = useState("");

  function handleQuizSubmit(){
    const correctSelections = {}
    const newQuizSelections = {...quizSelections}
    for (const key in answerData) {
      for (const answer of answerData[key]) {
        correctSelections[answer.id] = answer.answer
      }
    }

    //compare quizSelections to correctSelections
    for (const key in quizSelections) {
      if (quizSelections[key].selection !== correctSelections[key]) {
        newQuizSelections[key].correct = "incorrect"
      } else {
        newQuizSelections[key].correct = "correct"
      }
    }

    let score = 0;
    for (const key in quizSelections) {
      if (quizSelections[key].correct === "correct") {
        score++;  
      }
    }

    setQuizGrade(score);
    setQuizSelections(newQuizSelections)
  }

  function handleShowAnswers(){
    const correctSelections = {}
    for (const key in answerData) {
      for (const answer of answerData[key]) {
        correctSelections[answer.id] = {
          selection: answer.answer,
          correct: "correct"
        }
      }
    }

    setQuizSelections(correctSelections)
  }
  
  function handleResetQuiz(){
    setQuizGrade("");
    setQuizSelections(getMountSelections())
  }
  function changeAnswerSelection(id, value){
    setQuizSelections({...quizSelections, [id]:{selection: value, correct: "ungraded"}})
  }

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const handleCopy = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
      navigator.clipboard.writeText(`top: "${mousePosition.y}px",\nleft: "${mousePosition.x}px"`)
    }
  }

  useEffect(() => {
    console.log(quizSelections)
  }, [quizSelections])

  return (
    <>
      <div className={classes.diagramContainer} onMouseMove={handleMouseMove}>
        <img src={blankDiagram} alt="blank diagram" className={classes.blankDiagram} />
        <img src={craigDiagram} alt="craig diagram" className={classes.craigDiagram} />

        <Arrow start={{ x: 274, y: 395 }} end={{ x: 220, y: 443 }} />
        <Arrow start={{ x: 230, y: 525 }} end={{ x: 195, y: 500 }} />
        <Arrow start={{ x: 673, y: 171  }} end={{ x: 594, y: 171  }} />
        <Arrow start={{ x: 786, y: 171 }} end={{ x: 819, y: 171 }} />
        <Arrow start={{ x: 320, y: 544 }} end={{ x: 284, y: 544 }} />

        <Arrow start={{ x: 700, y: 310 }} end={{ x: 743, y: 275 }} />

        <Arrow start={{ x: 114, y: 525 }} end={{ x: 190, y: 475 }} />

        <Arrow start={{ x: 227, y: 80 }} end={{ x: 205, y: 96 }} />
        <Arrow start={{ x: 163, y: 111 }} end={{ x: 192, y: 106 }} />
        <Arrow start={{ x: 246, y: 190 }} end={{ x: 204, y: 124 }} />
        
        {quizSelections != undefined && answerData.temperatures.map((answer) => (
          <AnswerInput answer={answer} key={answer.id} className={classes.temperatureInput} userQuizSelections={quizSelections} changeAnswerSelection={changeAnswerSelection}/>
        ))}

        {quizSelections != undefined && answerData.carbonPercentages.map((answer) => (
          <AnswerInput answer={answer} key={answer.id} className={classes.carbonPercentageInput} userQuizSelections={quizSelections} changeAnswerSelection={changeAnswerSelection}/>
        ))}

        {quizSelections != undefined && answerData.majorLabels.map((answer) => (
          <MajorLabelAnswerInput answer={answer} key={answer.id} className={classes.majorLabelInput} inputWidth={answer.inputWidth} inputHeight={answer.inputHeight} allAnswers={answerData.majorLabels} userQuizSelections={quizSelections} changeAnswerSelection={changeAnswerSelection}/>
        ))}

        {quizSelections != undefined && answerData.minorLabels.map((answer) => (
          <AnswerInput answer={answer} key={answer.id} className={classes.minorLabelInput} userQuizSelections={quizSelections} changeAnswerSelection={changeAnswerSelection}/>
        ))}

        {quizSelections != undefined && answerData.zones.map((answer) => (
          <ZoneAnswerInput answer={answer} key={answer.id} className={classes.zoneInput} inputWidth={answer.width} userQuizSelections={quizSelections} changeAnswerSelection={changeAnswerSelection}/>
        ))}

      </div>

      <div className={classes.buttonContainer}>
        <button onClick={handleQuizSubmit}>Submit Quiz</button>
        <button onClick={handleResetQuiz}>Reset Quiz</button>
        <button onClick={handleShowAnswers}>Show Answers</button>
        {quizGrade != "" && <p>Score: {quizGrade} / 41</p>}
      </div>
    </>
  )
}

function AnswerInput({ answer, className, userQuizSelections, changeAnswerSelection }) {  
  
  return (
    <div className={`${classes.answerInput} ${className}` + " " + userQuizSelections[answer.id].correct} style={{ top: answer.top, left: answer.left }}>
        <input type="text" value={userQuizSelections[answer.id].selection} style={{ width: answer.inputWidth, height: answer.inputHeight }} onChange={(e) => changeAnswerSelection(answer.id, e.target.value)} />
    </div>
  )
}

function ZoneAnswerInput({ answer, className, userQuizSelections, changeAnswerSelection}) {

  return (
    <div className={`${classes.answerInput} ${className}` + " " + userQuizSelections[answer.id].correct} style={{ top: answer.top, left: answer.left }}>
      <select value={userQuizSelections[answer.id].selection} style={{ width: answer.inputWidth, height: answer.inputHeight }} onChange={(e) => changeAnswerSelection(answer.id, e.target.value)}>
        <option value="">Select Answer</option>
        <option value="Hypoeutectoid">Hypoeutectoid</option>
        <option value="Hypereutectoid">Hypereutectoid</option>
        <option value="Hypoeutectic">Hypoeutectic</option>
        <option value="Hypereutectic">Hypereutectic</option>
      </select>
    </div>
  )
}

function MajorLabelAnswerInput({ answer, className, allAnswers, userQuizSelections, changeAnswerSelection }) {
  return (
    <div className={`${classes.answerInput} ${className}` + " " + userQuizSelections[answer.id].correct} style={{ top: answer.top, left: answer.left }}>
      <select value={userQuizSelections[answer.id].selection} style={{ width: answer.inputWidth, height: answer.inputHeight }} onChange={(e) => changeAnswerSelection(answer.id, e.target.value)}>
        <option value="">Select Answer</option>
        {allAnswers.map((answer) => (
          <option value={answer.answer}>{answer.answer}</option>
        ))}
      </select>
    </div>
  )
}

function Arrow({ start, end}) {
  return (
    <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}}>
      <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="blue" strokeWidth="2"/>
      <circle cx={end.x} cy={end.y} r="4" fill="blue"/>
    </svg>
  )
}

export default App
