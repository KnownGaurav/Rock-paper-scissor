let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            lose: 0,
            tie: 0
        };

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Tie: ${score.tie}`;
function pickcomputermove(){
            const randomNumber = Math.random();
            let computermove = '';

            if(randomNumber >=0 && randomNumber < 1/3){
                    computermove = 'rock';
                }
            else if(randomNumber >=1/3 && randomNumber < 2/3){
                    computermove = 'paper';
                }
            else if(randomNumber >=2/3 && randomNumber < 1){
                    computermove = 'scissors';
                }
            return computermove;
        }

function playGame(playermove){
        const computermove = pickcomputermove();

        let result = '';

        if(playermove=='scissors'){
            if(computermove == 'rock'){
                result = 'You lose';
            }else if(computermove == 'paper'){
                result = 'You win';
            }else if(computermove == 'scissors'){
                result = 'Tie';
            }
        }

        if(playermove=='paper'){
            if(computermove == 'rock'){
                result = 'You win';
            }else if(computermove == 'paper'){
                result = 'Tie';
            }else if(computermove == 'scissors'){
                result = 'You lose';
            }
        }

        if(playermove=='rock'){
            if(computermove == 'rock'){
                result = 'Tie';
            }else if(computermove == 'paper'){
                result = 'You lose';
            }else if(computermove == 'scissors'){
                result = 'You win';
            }
        }

        if(result == 'You win'){
            score.wins ++;
        }
            
        if(result == 'You lose'){
            score.lose ++;
        }
            
        if(result == 'Tie'){
            score.tie ++;
        }

        localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Tie: ${score.tie}`;
    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves').innerHTML = `Your move : ${playermove} Computer move: ${computermove}`;


    alert(`You picked ${playermove}. Computer picked ${computermove}. ${result}
    Wins: ${score.wins}, Losses: ${score.lose}, Tie: ${score.tie}`);

            
}