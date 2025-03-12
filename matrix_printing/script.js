const start=document.getElementById("start")
const repeat=document.getElementById("repeat")
const skip=document.getElementById("skipinput")
const row=document.getElementById("rows")
const print=document.getElementById("print")
const skipbutton=document.getElementById("skip")


skipbutton.addEventListener("click",onskip);

function onskip(){
    document.getElementById('skipinput').className="show";
    document.getElementById('skiplabel').style.display="none";
    document.getElementById('skip').style.display="none";
    // document.querySelector('.inputs').style.visibility="hidden";
}


let arr = [];
print.addEventListener("click",async function(){
    document.querySelector(".inputs").style.display="none";
    let s=start.value;
    let r=repeat.value;
    let sk=skip.value;
    let rows=row.value;
    console.log(sk);
    

    createTable(rows,rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = [];  
        for (let j = 0; j < rows; j++) {
            arr[i][j] ="-";
        }
    }
    let left=0,right=rows-1,top=0,bottom=rows-1;
    let temp=0;
    while (left <= right && top <= bottom) {
        for (let i = bottom; i >= top; i--) {
           await new Promise((resolve)=>{
            setTimeout(resolve,1000);
           }).then(()=>{
            if(s==sk) s++;
            arr[i][left]=s;
            temp++;
            if(temp==r){
                s++;
                temp=0;
            }}

        )
           updateTable(rows);
           
        }
        
        left++;
        for (let i = left; i <= right; i++) {
            await new Promise((resolve)=>{
               setTimeout(resolve,1000);
               }).then(()=>{
                if(s==sk) s++;
                arr[top][i]=s;
                temp++;
                if(temp==r){
                    s++;
                    temp=0;
                }}
    
            )

               updateTable(rows)
            }   
        top++;
    
        if (top <= bottom) {
            for (let i = top; i <= bottom; i++) {
                await new Promise((resolve)=>{
                    setTimeout(resolve,1000);
                   }).then(()=>{
                    if(s==sk) s++;
                    temp++;
                    arr[i][right]=s
                    if(temp==r){
                        s++;
                        temp=0;
                    }}
        
                )
                   updateTable(rows)}
            right--;
        }
    
        if (left <= right) {
            for (let i = right; i >= left; i--){ 
                await new Promise((resolve)=>{
                    setTimeout(resolve,1000);
                   }).then(()=>{
                    if(s==sk) s++;
                    temp++;
                    arr[bottom][i]=s
                    if(temp==r){
                        s++;
                        temp=0;
                    }}
        
                )
                   updateTable(rows)}
            bottom--;
        }
    }

}

)
function createTable(rows, cols) {
    let table = document.getElementById("matrixTable");
    table.innerHTML="";
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = "0";  
        }
    }
}

function updateTable(rows) {
    let table = document.getElementById("matrixTable");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <rows; j++) {
            table.rows[i].cells[j].textContent = arr[i][j];
        }
    }
}


