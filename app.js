
//buttons//

var buttons = document.querySelectorAll(".popupbutton");

for(const button of buttons){

    button.addEventListener('click', function(){
        console.log(button);
        id = this.value;
        console.log(id);
        Openpopup(id);     
    });

}

var closebuttons = document.querySelectorAll(".close-popupbutton");

for(const button of closebuttons){

    button.addEventListener('click', function(){
        id = this.value;
        console.log(id);
        Closepopup(id);     
    });

}



function Openpopup(id){
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.opacity = 1;
    document.getElementById("loading-bg").style.display = "block";
    document.getElementsByTagName('body')[0].style.overflowY = "hidden";
}

function Closepopup(id){
    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.opacity = 0;
    document.getElementById("loading-bg").style.display = "none";
    document.getElementsByTagName('body')[0].style.overflowY = "visible";
    return false;
}


//formvalidation
    let issubmittable = false;
    var inputarea     =  document.querySelector('#inputarea');
    var form          = document.forms['contact-form'];
    var submitbtn     = document.querySelector('.submit-btn');
    var numarea       = document.querySelector('#wordcount');
    var name_form   = form.name;
    var password      = form.password;
    var check         = form.check;
    var namevalid = false , passvalid =false, areavalid =false , checkvalid = false , dropdownvalid = false;
    let input_array   = [namevalid , passvalid , areavalid , checkvalid];
    var dropdown      = form.dropdown;

    inputarea.addEventListener('focusout', function(){
        var numcount = this.value.length;
        if(numcount > 100 || numcount == 0 || this.value == "")
        {
            areavalid  = false;
            this.classList.add('animation-headshake');
        }
        else if(numcount <= 100){
            areavalid = true;   
            this.classList.remove('animation-headshake');
        }
        input_array[2] = areavalid;
        formchecker(input_array);
   })

   inputarea.addEventListener('keyup' , function(){
         var numcount = this.value.length;
        numarea.innerHTML = numcount + "/100";  
   })


    name_form.addEventListener('focusout' , function(){
        if(this.value == "" || this.value.length == null){
            namevalid = false;
            this.classList.add('animation-headshake');
        }
        else if(this.value.length > 0){
            namevalid = true;
            this.classList.remove('animation-headshake');
        }

        input_array[0] = namevalid;
        formchecker(input_array);

    })


    password.addEventListener('focusout', function(){
        let regExp = /@/;
        let ismatch = regExp.test(this.value);
        console.log(ismatch);
        if(this.value == "" && this.value.length == 0  && ismatch == false){
            passvalid = false;
            this.classList.add('animation-headshake');
        }
        else if(this.value.length > 0 && ismatch == true ){
            passvalid = true;
            this.classList.remove('animation-headshake');
        }

        input_array[1] = passvalid;
        formchecker(input_array);
        

    })

    check.addEventListener( 'focusout' , function(){

        if(this.checked){
            checkvalid = true;
            this.classList.remove('animation-headshake');
        }
        else{
            checkvalid = false;
            this.classList.add('animation-headshake');
        }
        input_array[3] = checkvalid;
        formchecker(input_array);
    })


    dropdown.addEventListener('focusout' , function(){
        if(this.value == ""){
            dropdownvalid = false;
            this.classList.add('animation-headshake');
        }
        else{
            dropdownvalid = true;
            this.classList.remove('animation-headshake');
        }
        input_array[4] = dropdownvalid;
        formchecker(input_array);
    })

function formchecker(input_array){
    value1 = input_array[0];
    value2 = input_array[1];
    value3 = input_array[2];
    value4 = input_array[3];
    value5 = input_array[4];
    console.log(input_array);
    
    if(value1 == true && value2 == true && value3 == true && value4 == true && value5 == true){
        issubmittable = true;
    }
    else{
        issubmittable = false;
    }

    formvalidation();
}
function formvalidation(){
         
    if (issubmittable){
        console.log("enabled");
        submitbtn.classList.remove('disabled');
    }
    if(issubmittable == false){
        console.log("disabled");
        submitbtn.classList.add('disabled');
    }

}


