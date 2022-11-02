function change(){
    var box = document.getElementById("box");
    var bgcolor = document.getElementById("background").value;
    var txtcolor = document.getElementById("textcolor").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var size = document.getElementById("size").value;
    var range = document.getElementById("range").value;

    box.style.backgroundColor = bgcolor;
    box.style.color = txtcolor;
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.fontSize = size + "px";
    box.style.borderRadius = range + "px";
}


var bike = null;
var timer = null;
function init(){
    bike = document.getElementById('bike')
    bike.style.position = "relative";
    bike.style.left ="0%";
}

function move(){
    bike.style.left= parseInt(bike.style.left) + 1 + "%"
    timer = setTimeout(move,100)
    x=parseInt(bike.style.left)
    if(x >= 80){
        document.getElementById("dangermsg").innerHTML="DANGER";
        dangermsg.style.display = "block";
        clearTimeout(timer);
    }
}

function stop(){
    clearTimeout(timer);
}

function reset(){
    bike.style.left ="0%";
}


var names =[];
var num=[];

function add(){
     var nameinput = document.getElementById("add").value ;
     var number = document.getElementById("num").value ;
     names.push(nameinput);
     num.push(number);
     view();
    if(names.length == 0){
        names.push(nameinput);
        num.push(number);
        view(); 
    }
    else 
    {
        for(var a=0;a<names.length;a++)
        {
            var x = names[a];
            var y = num[a];
            var c=0;
             if(y == number || x == nameinput)
            {
                 c=1;
                 if (x == nameinput)
                 {
                    
                     alert("contact name already exists \n"+names[a]+" - "+num[a]);
                    
                 }
                 else ( y == number)
                 {
                        
                     alert("contact number already exists \n"+names[a]+" - "+num[a]);
                    
                 }
             }   
             else if(c==0){
                 names.push(nameinput);
                 num.push(number);
                 view();
             }
            while(c==0)
            {
                if (x == nameinput)
                    {
                        
                        alert("contact name already exists \n"+names[a]+" - "+num[a]);
                        c=1
                        break;
                    }
                else if ( y == number)
                    {
                            
                        alert("contact number already exists \n"+names[a]+" - "+num[a]);
                        c=1
                        break;
                    }
                
                else if (c==0)
                {
                    names.push(nameinput);
                    num.push(number);
                    view();
                    break;
                }
            }
            if(c==1){
                break;
            } 
        }
    }
}
function firstremove(){
    names.shift();
    num.shift();
    view();
    
}

function lastremove(){
    names.pop();
    num.pop();
    view();
}

function view(){
    var result= "<ol>";
    for (var i=0;i<names.length;i++){
        result += "<li>"+names[i]+ " - "+num[i]+"</li>";
    }
    result += "</ol>";
    document.getElementById("output").innerHTML=result;
}

