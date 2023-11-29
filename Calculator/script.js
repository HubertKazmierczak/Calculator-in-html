let equation_text = "";
const Text_label = document.getElementById("equation_frame");
class Button{
    constructor(text,x,y,id){
        this.element = document.createElement("button");
        this.element.className = "button1";
        this.element.id = id;
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
        this.element.innerText=text;
        document.getElementById("div1").appendChild(this.element);
    }
    set_function(text){
        this.element.onclick = function(){
            equation_text = equation_text + text;
            if (equation_text.length <=40){
                Text_label.innerText = equation_text;
            }
            else{
                Text_label.innerText = equation_text.slice(equation_text.length - 41);
            }
        }
    }
}
let pos_x = 20;
let pos_y = 100;
const nums = ["1","2","3","4","5","6","7","8","9","0"];
const symbols = ["+","-","*","/",];
function place_numbers(){
    for(let i = 0;i<=9;i+=1){
        if (i == 9){
            pos_x = 70
        }
        
        console.log(pos_x);
        console.log(pos_y);
        console.log(i);
        let new_button = new Button(nums[i],pos_x,pos_y,nums[i]);
        new_button.set_function(nums[i]);
        pos_x +=50
        if(pos_x >=170){
            pos_x = 20;
            pos_y +=50;
        }
    }
}
place_numbers();
pos_x = 200;
pos_y = 100;
function place_symbols(){
    for(let y = 0;y<=3;y+=1){
        let new_symbol = new Button(symbols[y],pos_x,pos_y,symbols[y])
        new_symbol.set_function(symbols[y])

        pos_y += 50

    }
}
place_symbols();
const new_button = new Button("^",250,150,"^");
new_button.set_function("**");
function clear(){
    equation_text = "";
    Text_label.innerText = equation_text;
}
function back(){
    equation_text = equation_text - equation_text.slice(-1)
    Text_label.innerText = equation_text;
}
const back_button = new Button("back",250,200,"back");
back_button.element.onclick = function(){
    clear();
}
const clear_button = new Button("C",250,100,"C");
clear_button.element.onclick = function(){
    clear();
}
const equals = new Button("=",120,250,"=");
equals.element.onclick = function(){
    try{
        equation_text = eval(equation_text);
        Text_label.innerText = equation_text;
    }
    catch(SyntaxError){
        equation_text = "Syntax Error";
        Text_label.innerText = equation_text;
    }
}


