
function namecheck(name,err){ // space is valid in this expersion 
    if(!/^[A-Za-z\s]{2,10}/.test(name.value)){
        err.style.color="red"; // remove the s for no space 
            err.innerHTML = "Error in name";
            return false;
    }
    else 
    {
        err.style.color="green"
        err.innerHTML="valid"
        return true;
    }
}

function mobilecheck(mobile,err)
{
 if(!/^[789]{3}[0-9]{7}$/.test(mobile.value.trim())){
        err.style.color="red"; // remove the s for no space 
            err.innerHTML = "Error in mobile number";
            return false;
    }
    else 
    {
        err.style.color="green"
        err.innerHTML="valid"
        return true;
    }
}

function emailchecK(email,err){
     if(!/^[a-zA-Z_0-9-]+@[a-zA-Z0-9-_]+\.[a-z]{2,4}$/.test(email.value)){
        err.style.color="red"; // remove the s for no space 
            err.innerHTML = "Please Enter valid mail Address";
            return false;
    }
    else 
    {
        err.style.color="green"
        err.innerHTML="valid"
        return true;
    }
}

function urlvalid(linked,err){

    if(!/^(https?:\/\/)?(in\.)?linkedin\.com\//.test(linked.value))
    {
        err.style.color="red"
        err.innerHTML="Please enter valid link";
        return false;
    }
    else 
    {
        err.style.color="green"
        err.innerHTML = "valid link"
        return true;
    }

}

function comboBox(ownbox,err)
{
    if(ownbox.selectedIndex==0){
        err.style.color="red"
        err.innerHTML = "please select the value"
    }else 
    {
        err.style.color="green"
        err.innerHTML = "valid";
        var ans = ownbox.value
        console.log(ans)
    }
}

function percheck(per,err){

    if(!/^[0-9]{1,3}$/.test(per.value) || per.value < 0 || per.value > 100)
    {
        err.style.color ="red";
        err.innerHTML ="Please Enter valid perceantage"
        return false;   
    }
    else 
    {
        err.style.color="green"
        err.innerHTML = "valid"
        return true;
    }
}

function gradec(grade,err)
{
    if(!/^[0-9]{1,2}$/.test(grade.value)|| grade.value < 0 || grade.value > 10)
    {
        err.style.color ="red";
        err.innerHTML ="Please Enter valid grade"
        return false;   
    }
    else 
    {
        err.style.color="green"
        err.innerHTML = "valid"
        return true;
    }
}


// created dynamical radio button
var radiocont = document.getElementById("radiocontiner")
dynamicradio(radiocont)
function dynamicradio(radiocont)
{
    var radioValues = ["10th","12th","Diploma","School"]

    for(var i =0; i<radioValues.length; i++)
    {
        var radiotbn = document.createElement("input")
        radiotbn.type="radio"
        radiotbn.name="education"
        radiotbn.value=radioValues[i]

        var label = document.createElement("label")
        label.textContent = radioValues[i]

        // now appending it into the container 

        radiocont.appendChild(radiotbn)
        radiocont.appendChild(label)
        radiocont.appendChild(document.createElement("br"))
    }
}
// validating the radio button
var rdvalue;
function validRadio(err)
{
    var radioele = document.getElementsByName("education")
    var radioC = false;
    for(i=0; i<radioele.length; i++)
    {
        if(radioele[i].checked)
        {
             rdvalue = radioele[i].value;
            radioC=true;
            break;
        }
    }
    if(radioC)
    {
        err.style.color="green"
        err.innerHTML = "valid"
        return true;
    }else 
    {
        err.style.color="red"
        err.innerHTML = "please check atleast one radio button"
        return false;
    }
}
// calcuating teh points 
function calScore(linkd,per,grade,comboVal,showPer){
    var points = 0;
    if(per.value>60)
    {
        points += 5;
    }else 
    {
        points +=3;
    }
    if(linkd.value.trim() != ""){
        points+=5;
    }
    if(grade.value>6)
    {
        points+=5;
    }else 
    {
        points +=3;
    }
    if(comboVal.value=="Bachloer"){
        points+=3;
    }else 
    {
        points+=5;
    }
    showPer.innerHTML = `The Total Points is = ${points}`
}


// storing the data 
function storeFormData(fname, lname, mobile, email, linkdin, quali,radiovalue) {
    let myFormdata = {
        firstname: fname,
        lastname: lname,
        mobile: mobile,
        email: email,
        linkdin: linkdin,
        quali: quali,
        radiovalue : radiovalue
    };
    localStorage.setItem('myFormData', JSON.stringify(myFormdata));
    document.cookie = `username=${fname}`
    console.log("stored data")
}
// getting the data 
function showData(divele){

    var storedData = localStorage.getItem('myFormData')
    if(storedData){ // used template string for it 
        var formData = JSON.parse(storedData)
        divele.innerHTML = `<h4> Stored data</h4>
                            First Name = ${formData.firstname} <br>
                            Last Name = ${formData.lastname}<br>
                            Mobile = ${formData.mobile}<br>
                            email = ${formData.email}<br>
                            linkdin link = ${formData.linkdin}<br>
                            qualification = ${formData.quali}<br>
                            Select Radio value = ${formData.radiovalue}
                            <br>
        `
    }

}