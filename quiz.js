var questions = [
  {
                        "question": "HTML stands for Hypertext Markup Language", 
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "Semantic markup only effects the presentation of an HTML document", 
                        "correctAnswer" : "False"
                    },
                    { 
                        "question" : "A Style Sheet is used to change the look of an HTML page",
                        "correctAnswer" : "True"
                    }, 
                    {
                        "question" : "The World Wide Web Consortium (W3C) is a corporate organization that dictates how the internet can be used",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "Active White Space is the amount of the color white on a page",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "This is a css comment /*comment*/",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "Hexidecimal colors need a pound sign/hashtag in front of them",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "The inventor of HTML is Tim Berners Lee",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "The international standard for filenames is often called File Transfer Protocol",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "CSS stands for Computer Style Sheets",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "The correct HTML for referring to an external style sheet is with "stylesheet"style.css"/stylesheet",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "The head of an HTML document is the correct place to refer to an external style sheet",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "<background>red</background> adds a red background to an HTML document",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "<style></style> refers to an internal style sheet",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "Inline styles are defined using the attribute tag inline",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "This syntax is correct: body{ color: white; }",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "<a href='dunwoody.edu'>Dunwoody</a> will create a clickable hyperlink for the text 'Dunwoody'",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "<!-- This is a CSS comment -->",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "h1{ background-color: red; } will give all h1 tags a red background",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "The CSS property text-size will change the size of text",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "The CSS property font-weight can make text bold",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "The CSS property font-family can be used to change the font",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "<h6> is the largest heading tag",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "padding: 10px 20px 5px 1px targets each side of an element in a clockwise order starting from the top",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "Padding is used to create white space outside of an element",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "To select an element with the id 'Dunwoody', .Dunwoody is used",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "To select an element with the class name 'Dunwoody', .Dunwoody is used",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "<img src='image.png' alt='image'> is the correct HTML for inserting an image",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "HTML comments cannot be used in CSS",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "HTML is the structuring of content on a webpage, and CSS is the styling of the content",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "<title> will display content within the browser tab",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "href defines alternative text for an image",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "<!DOCTYPE html> is the correct doctype for HTML5",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "<navigation> defines navigation links",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "<header></header> generally contains the title, logo, and navigation of the webpage",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "rgb(100, 5, 255) is a hexadecimal color value",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "Web servers are not case sensitive (upper and lowercase letters)",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "borders can be coded with width in pixels",
                        "correctAnswer" : "true"
                    },
                    {
                        "question" : "Outline CSS is a valid CSS method",
                        "correctAnswer" : "False"
                    },
                    {
                        "question" : "images must have alternative text in their tags",
                        "correctAnswer" : "True"
                    },
                    {
                        "question" : "floats will not help with page layout",
                        "correctAnswer" : "False"
                    }
];

// Load first question on page laod
let currentQuestion = 0;

var wrongCount = 0, rightCount = 0;

// Sets total amount of questions to total in questions array
const totalQuestions = questions.length;

// Target Question card to be populated by question in question array
const card = document.querySelector('#card');
const answerButton = document.querySelector('#truefalse');
const nextButton = document.querySelector('#next');

// Populate Question card with Question
function generateQuestions(index) {
    console.log(index);
    // Push Question text to Card
    card.innerHTML = questions[index].question;
}

function loadNextQuestion() {
    currentQuestion++;
    answerButton.style.display="flex";
    nextButton.style.display="none";
    card.style.color = "white";
    card.style.transition = "transform 0s ease-in";

    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Show Results';
    }

    if(currentQuestion == totalQuestions) {
        showQuestions();
    }
    
    else{
        generateQuestions(currentQuestion);
    }
} 

// If the True is chosen:
function answerTrue(){
    if (questions[currentQuestion].correctAnswer == 'True'){
        card.innerHTML =  "<p><span id='correct_text' class='answer_text'>Correct!</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var correctText = document.getElementById("correct_text");
        card.style.transition = "all .2s";
        correctText.style.color = "#55AA44";

        rightCount+=1;
        document.getElementById('correct_talley').innerHTML = rightCount;
    }

    else{
        card.innerHTML = "<p><span id='incorrect_text' class='answer_text'>Incorrect :(</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var incorrectText = document.getElementById("incorrect_text");
        incorrectText.style.color = "#993311";
        card.style.transition = "all .2s";

        wrongCount +=1;
        document.getElementById('wrong_talley').innerHTML = wrongCount;
    }

    answerButton.style.display="none";
    nextButton.style.display="block";
}

function answerFalse(){
    if (questions[currentQuestion].correctAnswer == 'False'){
        card.innerHTML =  "<p><span id='correct_text' class='answer_text'>Correct!</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var correctText = document.getElementById("correct_text");
        card.style.transition = "all .2s";
        correctText.style.color = "#55AA44";

        rightCount+=1;
        document.getElementById('correct_talley').innerHTML = rightCount;
    }

    else{
        card.innerHTML = "<p><span id='incorrect_text' class='answer_text'>Incorrect :(</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var incorrectText = document.getElementById("incorrect_text");
        incorrectText.style.color = "#993311";
        card.style.transition = "all .2s";

        wrongCount +=1;
        document.getElementById('wrong_talley').innerHTML = wrongCount;
    }

    answerButton.style.display="none";
    nextButton.style.display="block";
}

// Add onclick to true and false buttons
var trueButton = document.getElementById('trueButton');
trueButton.addEventListener('click', answerTrue);
var falseButton = document.getElementById('falseButton');
falseButton.addEventListener('click', answerFalse);

// On page load, loads first question
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);

// Populate Questions Page
var questionText = document.getElementsByClassName('question');
var answerText = document.getElementsByClassName('question_answer');

var questionContainer = document.getElementById("question_container");
var cardContainer = document.getElementById("card_container");
var showQuestionsButton = document.getElementById("show_questions")

function showQuestions(){
    questionContainer.style.display = "flex";
    cardContainer.style.display = "none";
}

showQuestionsButton.addEventListener('click', showQuestions);
