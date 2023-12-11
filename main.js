'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const quiz = [
  {
  question: "Q1. 私の好きな食べ物はどれでしょう？",
  choices: [
  "お寿司",
  "焼肉",
  "フレンチ"
  ],
  correct: "お寿司"
  },
  {
  question: "Q2. 私の吸っているたばこの銘柄は？",
  choices: [
  "ラッキーストライク",
  "マルボロ",
  "セブンスター14"
  ],
  correct: "セブンスター14"
  },
  {
  question: "Q3. 私の好きなところは？",
  choices: [
  "全部",
  "容姿",
  "なし"
  ],
  correct: "全部"
  },
  {
  question: "Q4. 今貴方が私への気持ちで当てはまるのは？",
  choices: [
  "好き",
  "嫌い",
  "もちろん、大好きです"
  ],
  correct: "もちろん、大好きです"
  },
  {
  question: "Q5. 最後に私と結婚してくれますか？",
  choices: [
  "Yes",
  "ちょっと考えさせて",
  "No"
  ],
  correct: "Yes"
  },
  
  
 ]


 const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
 
const button = document.getElementsByTagName("button");
const buttonLength = button.length;
 
const setupQuiz = () => {
 document.getElementById("question").textContent = quiz[quizIndex].question;
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



  
