const elForm = document.querySelector(".hero__form");
let elInputName = document.querySelector(".hero__name");
let elInputrela = document.querySelector(".hero__rela");
let elInputMobile = document.querySelector(".hero__tel");

let elResultBox = document.querySelector(".hero__result-in");

var newUl = document.createElement("ul");

let arr1 = [];

function form(arr){
    newUl.textContent = ""
    arr.forEach(function(item){
        
        var newLi = document.createElement("li");
        var link = document.createElement("a")
        link.textContent = item.number
        link.href = `Tel: ${item.number}`

        var newP = document.createElement("p")
        newP.textContent = item.job

        var h3 = document.createElement("h3")
        h3.textContent = item.name

        newLi.appendChild(h3)
        newLi.appendChild(newP)
        newLi.appendChild(link) 
        newUl.appendChild(newLi);

        
    })
    elResultBox.appendChild(newUl);
    
}

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elInputNameValue = elInputName.value;
    var elInputRelaValue = elInputrela.value;
    var elInputMobileValue = elInputMobile.value;
    
    // elSpan.textContent = arr1.name;
    // elSpan.textContent = arr1.job;
    // elSpan.textContent = arr1.number;
    
    console.log(arr1);
    
    let object1 = {
        name : elInputNameValue,
        job: elInputRelaValue,
        number : elInputMobileValue
        
    }
    
    if(elInputNameValue && elInputRelaValue && elInputMobileValue !== "") {
        arr1.push(object1)
    }
    console.log(arr1);
    elInputNameValue.innerHTML = "";
    form(arr1) 
    
    elInputName.value="";
    elInputrela.value="";
    elInputMobile.value="";
})