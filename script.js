let x = 0;
let abc= 0;
let btns = document.querySelectorAll(".btn");
let value = document.getElementById("value");


function makingReset(){
    if(abc==0){
        const button = document.createElement('button');
            button.className = 'btn reset';
            button.innerText = 'Reset';
            button.addEventListener('click', function() {
                x = 0;
                value.style.color = "white";
                value.innerText = x;
                document.body.removeChild(button);
                abc=0;
            });
        document.body.appendChild(button);
    abc=1;
    }
}


btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const types = e.currentTarget.classList;
        if (types.contains("decrease")) {
            x--;
            makingReset();
        } else if (types.contains("increase")) {
            x++;
            makingReset();
        } else {
            x == 0;
        }
        
        if (x > 0) {
            value.style.color = "green";
        
        } else if (x < 0) {
            value.style.color = "red";
        } else if (x==0){
            value.style.color= "white";
        }

        value.innerText = x;
    });
});



