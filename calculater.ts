
//this function use to add numbers
function insertNum(val:number)
{
 (<HTMLInputElement>  document.getElementById("cal")).value+= val
}


//function for evaluation
function solve() {
    let x = (<HTMLInputElement>  document.getElementById("cal")).value
    let y:any = eval(x);
        (<HTMLInputElement> document.getElementById("cal")).value = y;
}


//function for clearing the display
function clr() {
    (<HTMLInputElement>  document.getElementById("cal")).value = ""
}

function back() {
    let x:number =parseInt((<HTMLInputElement> document.getElementById("cal")).value);
   //let x = "textview.value";
    //let y = x.substring(0, x.y - 1);
   
    (<HTMLInputElement>document.getElementById("cal")).value = (Math.floor(x / 10)).toString();
} 

function SR():void {
    let x: any = document.getElementsByClassName("textview");
    let y = Math.sqrt(parseInt(x[0].value));
    x[0].value = y;
}









  