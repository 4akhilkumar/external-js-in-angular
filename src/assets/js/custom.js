// $(function() {
//     alert("Testing Initial Alert using JS");
// })

function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;
    var phone=document.myform.phone.value;
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");    
      
    if (name==null || name=="") {  
      alert("Name can't be blank");  
      return false;  
    }
    else if(name.length<6) {  
        alert("Name must be at least 6 characters.");  
        return false;  
    }
    else if(password.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
    }
    else if(phone.length<10 || phone.length>10) {
        alert("Phone No. must be 10 Digits."); 
        return false;
    }
    else if(password.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    return false;  
    }
}