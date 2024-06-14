


 //to get all Font Size
 let toGetAllFont=[];
let y=0;//index for above loop
let words=document.getElementsByTagName("div");

addingAllFont();

function addingAllFont(){

 for(let i=0;i<words.length;i++){

    const getFont=words[i].style.getPropertyValue("font-size");
    //console.log("printing font"+getFont);
    if(toGetAllFont.length==0){
        toGetAllFont[y]=getFont;
        y++;
    }


    else {
        let x=true;
        for(let z=0;z<toGetAllFont.length;z++){
            if(toGetAllFont[z]===getFont){
                x=false;
            }


        }
        if(Boolean(x)){
            toGetAllFont[y]=getFont;
            y++;
        }
    }




  }
}

console.log(toGetAllFont[4]+" Printing font size of 4")
console.log(toGetAllFont[5]+" Printing font size of 5")
for(let io=0;io<toGetAllFont.length;io++){
    
    console.log(io+" coming here "+toGetAllFont[io]);
}

// end of logic to get all font -size

var importedData=localStorage.getItem('VariableContainData');

console.log(importedData);

var string_to_array = function (str1) {
    return str1.trim().split("+");
};


var data=string_to_array(importedData);

//console.log(data);


var filteredArr = data.filter(function (elem) {
    return elem !== undefined;
 });

 let withReg=[];
 for(i in filteredArr)
 {
    withReg[i]=filteredArr[i].replace(/[0-9.]/g,'');


 }
 

 for(let xy=0;xy<withReg.length;xy++){
    console.log(withReg[xy].trim());
    addHyperLink(withReg[xy].trim());
 }
 



 function addHyperLink(eachString){//function to add hyperPlink to each Striing passed

    let allContents=eachString;

let splitContent=allContents.split(" ");

for(i=0;i<words.length;i++){

    if(words[i].style.getPropertyValue("font-size")===toGetAllFont[2] || words[i].style.getPropertyValue("font-size")===toGetAllFont[1]
    
     || words[i].style.getPropertyValue("font-size")===toGetAllFont[4]
    || words[i].style.getPropertyValue("font-size")===toGetAllFont[5]){    
        

        if(words[i].textContent===splitContent[0]){
           // console.log(words[i]);
            //console.log("Matching with World");
            //let count=1;
            var checkString="";
            for(let r=0 ;r<splitContent.length;r++){
                //console.log("Coming Inside loop");
                //console.log(words[i+r].textContent+"printing");
                //console.log(splitContent[r]+" text-content");
                if(r!=splitContent.length-1){

                if(splitContent[r]===words[i+r].textContent){
                    //count++;
                    //console.log(count);
                    //console.log("inside if"+splitContent[r]);
                    checkString+=splitContent[r]+" ";

                }
               }
               else{
                if(splitContent[r]===words[i+r].textContent || splitContent[r]===words[i+r+1].textContent || splitContent[r]===words[i+r+2].textContent){
                    //count++;
                    //console.log(count);
                   // console.log("inside if"+splitContent[r]);
                    checkString+=splitContent[r]+" ";

               }
            }
            //console.log(checkString+" this is check string");


            if(checkString===(allContents+" ")){
                splitContent.reverse();
                let id=splitContent[0]+101;
                words[i].setAttribute("id",id);
                console.log(words[i]);
                console.log("added ");
            }
            

        }



    }

    

}
}







 }//end of function 


 



















// let ab="Prolouge the day my world changed ";
// let splitab[]=ab.split(" ");
// let count=0;
// var wordsOfPage=document.getElementsByTagName("div");

// for(let i=0;i<wordsOfPage.length;i++){

//     let a=wordsOfPage[i].textContent
//     if(a===splitab[0]){
//         for(let y=1;y<splitab.length;y++){
//             if(splitab[y]=wordsOfPage[i+y]){
//                 count++;
//                 continue;
//             }
//             else
//             break;

//         }



//     }


// }