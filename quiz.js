var quiz = {
  // (A) PROPERTIES 
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "The number of edges from the root to the node is called __________ of the tree.",
    o : [
      "Height",
      "Depth",
      "Length",
      "Width"
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "What is a full binary tree?",
    o : [
      "Each node has exactly zero or two children",
      "Each node has exactly two children",
      "All the leaves are at the same level",
      "Each node has exactly one or two children"
    ],
    a : 0
  },
  {
    q : "The post-order traversal of a binary tree is O P Q R S T. Then possible pre-order traversal will be",
    o : [
      "	T Q R S O P",
      "	T O Q R S P",
      "	T O Q P S R ",
      "	T Q O S P R "
    ],
    a : 2
  },
  {
    q : ". In preorder traversal of a binary tree the second step is ",
    o : [
      "traverse the right subtree",
      "traverse the left subtree",
      "traverse right subtree and visit the root",
      " visit the root"
    ],
    a : 1
  },
  {
    q : " An important application of binary tree is ",
    o : [
      "stack implementation",
      "queue implementation",
      "traverse a cyclic graph",
      "Huffman coding"
    ],
    a : 3
  },
  {
    q : " The time complexity of calculating the sum of all leaf nodes in an n-order binary tree is  ",
    o : [
      "O(n2)",
      "O(n+1)",
      "O(1)",
      "O(n)"
    ],
    a : 3
  },
  {
    q : " Which of the following statements about binary trees is NOT true?  ",
    o : [
      " Every binary tree has at least one node.",
      "Every non-empty tree has exactly one root node",
      "Every node has at most two children",
      "Every non-root node has exactly one parent"
    ],
    a : 0
  },

  {
    q : " In preorder traversal of a binary tree the second step is   ",
    o : [
      " traverse the right subtree",
      "traverse the left subtree",
      "traverse right subtree and visit the root",
      "visit the root"
    ],
    a : 1
  },
  {
    q : " In a binary search tree, which of the following traversals would print the numbers in the ascending order? ",
    o : [
      "Level-order traversal",
      "Pre-order traversal",
      "Post-order traversal",
      "In-order traversal"
    ],
    a : 3
  },
  {
    q : "What is the time complexity of pre-order traversal in the iterative fashion? ",
    o : [
      "O(1)",
      "O(n)",
      "O(logn)",
      "O(nlogn)"
    ],
    a : 3
  },

  ],
  

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: function(){
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function(){
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
    }
  },
  
  // (D) OPTION SELECTED
  select: function(){
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    if (correct) { 
      quiz.score++; 
      this.classList.add("correct");
    } else {
      this.classList.add("wrong");
    }
  
    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function(){
      if (quiz.now < quiz.data.length) { quiz.draw(); } 
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  }
};
window.addEventListener("load", quiz.init);