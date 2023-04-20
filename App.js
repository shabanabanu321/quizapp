import {useState} from "react"; 
function App(){
const questions=[
{
  questionText:"which is framework used to create webapplications?",
  answerOption:[
    {answerText:"Node js",isCorrect:false},
    {answerText:"React js",isCorrect:true},
    {answerText:"Mongo db",isCorrect:false},
    {answerText:"Express js",isCorrect:false}
  ],
},

{
  questionText:"Which amog these is used to store database?",
  answerOption:[
    {answerText:"Angular js",isCorrect:false},
    {answerText:"Express js",isCorrect:false},
    {answerText:"Mongo db",isCorrect:true},
    {answerText:"Node js",isCorrect:false}

    ],
    },
  
    {
      questionText:"What is a state in React?",
      answerOption:[
        {answerText:"A permanent storage",isCorrect:false},
        {answerText:"External storage of the component",isCorrect:false},
        {answerText:"Internal storage of the component",isCorrect:true},
        {answerText:"none of the above",isCorrect:false}
      ],

    },
   {
    questionText:"What are the two ways to handle data in React?",
    answerOption:[
      {answerText:"State & Props",isCorrect:true},
      {answerText:"Services & Components",isCorrect:false},
      {answerText:"State & Services",isCorrect:false},
      {answerText:"State & Component",isCorrect:false}
    ],
   },
   {
    questionText:"Which of the following is a must API for every React.js component?",
    answerOption:[
      {answerText:"render",isCorrect:false},
      {answerText:"setinitial",isCorrect:false},
      {answerText:"renderComponent",isCorrect:true},
      {answerText:"SetinitialComponent",isCorrect:false}
    ],
   },
   {
    questionText:"Which of the following acts as the input of a class-based component?",
    answerOption:[
      {answerText:"class",isCorrect:false},
      {answerText:"factory",isCorrect:false},
      {answerText:"render",isCorrect:false},
      {answerText:"props",isCorrect:true}
    ],
   },
   {
   questionText:"Which of the following keyword is used to create a class inheritance?",
   answerOption:[
     {answerText:"create",isCorrect:false},
     {answerText:"inherit",isCorrect:false},
     {answerText:"extend",isCorrect:true},
     {answerText:"this",isCorrect:false}
   ],
  },
  {
    questionText:"What is the default port where webpack-server runs? ",
    answerOption:[
      {answerText:"3030",isCorrect:false},
      {answerText:"5040",isCorrect:false},
      {answerText:"8090",isCorrect:true},
      {answerText:"6000",isCorrect:false}
    ],
   },
   {
    questionText:"How many numbers of elements a valid react component can return?",
    answerOption:[
      {answerText:"4",isCorrect:false},
      {answerText:"1",isCorrect:true},
      {answerText:"9",isCorrect:false},
      {answerText:"3",isCorrect:false}
    ],
   },
   {
    questionText:"Which of the following is the correct name of React.js?",
    answerOption:[
      {answerText:"react",isCorrect:false},
      {answerText:"reactjs",isCorrect:false},
      {answerText:"react.js",isCorrect:false},
      {answerText:"all",isCorrect:true}
    ],
   }
  ]


const[currentQuestion,setCurrentQuestion]=useState(0);
const[showScore,setshowScore]=useState(false);
const[score,setScore]=useState(0);
const handle=(isCorrect)=>{
if(isCorrect){
  setScore(score+1)
}
const nextQuestion=currentQuestion+1;
if(nextQuestion<questions.length){
  setCurrentQuestion(nextQuestion)
}else{
  setshowScore(true)
}
}
return(
  <div className="app">
    {showScore ?(
      <div className="score-section">
        you scored {score} out of {questions.length}
        </div>
    ):(
      <>
      <div className="question-section">
        <div className="question-count">
          <span>Question{currentQuestion+1}</span>/{questions.length}
        </div>
        <div className="question-text">{questions[currentQuestion].questionText}
        </div>
        <div class="answer-section">
          {questions[currentQuestion].answerOption.map((answerOption)=>(
            <button onClick={()=> handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
            </div>
        </div>
        </>
    )}
    
    </div> 
)
          }
          
          export default App;
    
  
