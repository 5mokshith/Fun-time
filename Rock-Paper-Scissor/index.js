
let PlayerScore = 0;
let ComputerScore = 0;
const PlayerDisplay = document.getElementById("PlayerScore");
const ComputerDisplay = document.getElementById("ComputerScore");
const PlayerChoice = document.getElementById("PlayerChoice");
const ComputerChoice = document.getElementById("ComputerChoice");
const Result = document.getElementById("Result");
const options = ["Rock","Paper","Scissors"];

function actionPerformed(Playerchoice)
{
    let Rand = RandomGen();
    let Computerchoice = options[Rand];

    PlayerChoice.textContent =  Playerchoice ;
    ComputerChoice.textContent =  Computerchoice;

    if(Playerchoice === Computerchoice)
    {
        Result.textContent = "It's a tie ";
        Result.style.color = "black";
    }
    else 
    {
        switch(Playerchoice)
        {
            case "Rock":
                Result.textContent = Computerchoice == "Scissors" ? "You won":"You lost";
                if(Result.textContent == "You won")
                {
                    Result.style.color = "green";
                }
                else if(Result.textContent == "You lost"){
                    Result.style.color = "red";
                }
                else{
                    Result.style.color = "black";
                }
                updateScore(Result.textContent);
                break;
            case "Paper":
                Result.textContent = Computerchoice == "Rock" ? "You won":"You lost";
                if(Result.textContent == "You won")
                {
                    Result.style.color = "green";
                }
                else if(Result.textContent == "You lost"){
                    Result.style.color = "red";
                }
                else{
                    Result.style.color = "black";
                }
                updateScore(Result.textContent);
                break;
            case "Scissors":
                Result.textContent = Computerchoice == "Paper" ? "You won":"You lost";
                if(Result.textContent == "You won")
                {
                    Result.style.color = "green";
                }
                else if(Result.textContent == "You lost"){
                    Result.style.color = "red";
                }
                else{
                    Result.style.color = "black";
                }
                updateScore(Result.textContent);
                break;
        }

    }

}

function updateScore(result)
{
    if(result == "You won")
    {
        PlayerScore ++;
        PlayerDisplay.textContent = PlayerScore;
    }
    else if(result == "You lost")
    {
        ComputerScore ++;
        ComputerDisplay.textContent = ComputerScore;
    }
}

function Reset()
{
    PlayerScore = 0;
    PlayerDisplay.textContent = PlayerScore;
    ComputerScore = 0;
    ComputerDisplay.textContent = ComputerScore;
    Result.textContent = " ";
}

function RandomGen()
{
    let number =  Math.floor(Math.random()*6);
    if(number == 3)
    {
        return 0;
    }
    else if(number == 4)
    {
        return 1;
    }
    else if(number == 5)
    {
        return 2;
    }
    else{
        return number;
    }
}