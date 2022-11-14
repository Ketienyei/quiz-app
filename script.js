const startButton =document.getElementById('start-btn')
const nextButton =document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answersButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click',startGame)
nextButton.addEventListener ('click', () =>{
  currentQuestionIndex++
  setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
  resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach( answer =>{
    const button = document.createElement('button')
    button.inerText = answer.text
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct=answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answersButtonsElement.appendChild(button)
  })
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answersButtonsElement.firstChild){
    answersButtonsElement.removeChild
    (answersButtonsElement.firstChild)
  }
}

function selectAnswer (e) {
  const selectButton=e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answersButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  nextButton.classList.remove('hide')

}
function setStatusClass(element,correct){ 
  clearStatusClass(element)
  if (correct){
    element.classList.add('correct')
  } else{
    element.classList.add('wrong')
  }
}
function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
    {
      question: 'What is 4 + 4',
      answers:[
        {text: '8',correct: true },
        {text: '22',correct: false },
      ]  
    }
]

