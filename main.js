'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const quiz = [
  {
  question: 'Q1. 門田暁憲のことが大好きですか？',
  choices: [
  '大好き',
  'まぁまぁ好き',
  '普通',
  '嫌い'
  ],
  correct: '大好き'
  },
  {
  question: 'Q2. 仕事で帰りが遅くても許してくれますか？',
  choices: [
  'もちろん、それでも大好き',
  '黙って早く帰ってこい！'
  ],
  correct: 'もちろん、それでも大好き'
  },
  {
  question: 'Q3. 喧嘩した時は凄く残業して遅く帰って来ますがいいですか？',
  choices: [
  '定時で帰ってこい',
  '有給にして許してもらえるようにサプライズでも用意しろ',
  '一人の時間できるからOK',
  '大好きだから早く仲直りしようね'
  ],
  correct: '大好きだから早く仲直りしようね'
  },
  {
  question: 'Q4. 仕事を頑張った日の足はとても香ばしい匂いがしますが、それでも愛しますか？',
  choices: [
  'すぐにお風呂入ってください',
  'もちろん、大好きです'
  ],
  correct: 'もちろん、大好きです'
  },
  {
  question: 'Q5. 二度寝が大好きですが朝から叩かないと約束しますか？',
  choices: [
  '叩く',
  '水をかける',
  'もちろん一緒に二度寝してやる'
  ],
  correct: 'もちろん一緒に二度寝してやる'
  },
  
  
 ]


 const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
 
const button = document.getElementsByTagName('button');
const buttonLength = button.length;
 
const setupQuiz = () => {
 document.getElementById('question').textContent = quiz[quizIndex].question;
 let buttonIndex = 0;
 while(buttonIndex < buttonLength) {
  button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
  buttonIndex++;
 }
}
 
setupQuiz();


const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
 } else {
  window.alert('あなたの正解数は' + score + '/' + quizLength + 'です！'+'全問正解出来たらデートに行きましょう！');
 }
}

  
 let handlerIndex = 0;
 while(handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
 }



  
