//let getAllContent=["A Daughter Is Born","My Father the Falcon","Growing up in a School","Why I Don’t Wear Earrings and Pashtuns Don’t Say Thank You"];



let words=document.getElementsByTagName("div");

/*for(let xy=0;xy<getAllContent.length;i++){


    addHyperLink(getAllContent[xy]);



}

function addHyperLink(line){


    let splitContent=line.split(" ");
    for(i=0;i<words.length;i++){
    
    if(words[i].textContent===splitContent[0]){

        var checkString="";
        for(let r=0 ;r<splitContent.length;r++){
        
            console.log(words[i+r].textContent+"printing");
            console.log(splitContent[r]+" text-content");
            if(splitContent[r]===words[i+r].textContent){
                //count++;
                //console.log(count);
                console.log("inside if"+splitContent[r]);
                checkString+=splitContent[r]+" ";
            }
        
        
        }
        if(checkString===(allContents+" ")){
            words[i].classList.add("stayaWorking");
            console.log(words[i]);
            console.log("added ");
        }





    }
    
    
    
    
    }



}*/

var importedData=localStorage.getItem('VariableContainData');
console.log("Working");
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
    addHyperLinkToeachWOrd(withReg[xy].trim());
 }


//to add HyperLink to every encountered word
function addHyperLinkToeachWOrd(string1){
let allContents=string1;

let splitContent=allContents.split(" ");
for(i=0;i<words.length;i++){
    if(words[i].textContent===splitContent[0]){

        var checkString="";
            for(let r=0 ;r<splitContent.length;r++){
                //console.log("Coming Inside loop");
                console.log(words[i+r].textContent+"printing");
                console.log(splitContent[r]+" text-content");
                

                if(splitContent[r]===words[i+r].textContent){
                    //count++;
                    //console.log(count);
                    console.log("inside if"+splitContent[r]);
                    checkString+=splitContent[r]+" ";

                }
               
              
            }
            console.log(checkString+" this is check string");


            if(checkString===(allContents+" ")){
                /*splitContent.sort();
                let id=splitContent[0]+101;
                words[i].classList.add("OkAddingClass")
                console.log(words[i]);
                console.log("added ");*/
                splitContent.reverse();

                var link='pdf1.html#'+splitContent[0]+101;
                //var newHtml = $(words[i].getAttribute("id")).html().replace(words[i].textContent, 
                   // '<a class="wikilink" title="here is a link to Wikipedia" href="'+link +'">' + words[i].textContent + '</a>');
                //$(words[i].getAttribute("id")).html(newHtml);
                for(let r=0 ;r<splitContent.length;r++){
                let text=words[i+r].textContent;
            
               words[i+r].innerHTML='<a  href="'+link +'">' + text+ '</a>';
                }
            }
            

        }

    }
}

//end of the function


