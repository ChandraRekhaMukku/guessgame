var RandomNumber = Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click',function(){
    var usernum = parseInt(document.getElementById('guess').value);
    attempts++;
    if (usernum == RandomNumber){
        display("Congratulations, you guessed the number in "+attempts+"attempts");
        document.getElementById('btn').disabled = true;
    }
    else if(usernum<RandomNumber){
        display("Too Low try a higher number");
    }
    else{
        display("Too High try a lower number");
    }
});
function display(message){
    document.getElementById('msg').textContent=message;
}