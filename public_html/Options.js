alert("Enter of what you learned in programming");
alert("What I have learned from programming was not only about different languages\n\
but on how the coding actually works and how you could go over it many times\n\
to see any missing codings or problems. And its cool to see that in this world\n\
anywhere around us there will always be coding");
alert("Enter the techniques of what you learned of");
alert("Some techniques I have learned was how to input a users number into the\n\
coding so that we could display it and see how it works, for example on how \n\
your reading this is on how I know to input my own or others text. Another \n\
thing I've learned was loops like for loops and while loops which could keep \n\
the coding going and going until it has reached a certain point for the user\n\
to say");
var game = Number(prompt("This is a game so choose a random number from 1-5"));

var point = Math.floor(Math.random() * 5 + 1);

var guess = 2;
var guessField;
document.getElementById("submitguess").onclick;

var number = document.getElementById(guessField).value;
if (point === guess) {
    document.write("You got the right number");
} else 
    if (point > guess) {
        document.write("try again");
    }


