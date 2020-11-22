function checkFields() 
{
    
    if(document.getElementById("firstname").textContent === "")
        {
            document.getElementById("firstname").style.borderColor = "#F00";
        }
    
    if(document.getElementById("lastname").textContent === "")
        {
            document.getElementById("lastname").style.borderColor = "#F00";
        }
    
    if(document.getElementById("street").textContent === "")
        {
            document.getElementById("street").style.borderColor = "#F00";
        }
    
    if(document.getElementById("housenumber").value === "")
        {
            document.getElementById("housenumber").style.borderColor = "#F00";
        }
    
    if(document.getElementById("district").textContent === "") 
        {
            document.getElementById("district").style.borderColor = "#F00";
        }
    
    if(document.getElementById("city").textContent === "")
        {
            document.getElementById("city").style.borderColor = "#F00";
        }
}

function checkTextField(fieldname)
{
    if(document.getElementById(fieldname).value.length < 2)
        {
            document.getElementById(fieldname).style.borderColor = "#F00";
        }
    else
        {
            document.getElementById(fieldname).style.borderColor = "#0F0";
        }
}

function checkDate()
{
    if(document.getElementById("dateofbirth").value >= "2005-01-01" || document.getElementById("dateofbirth").value <= "1910-01-01")
        {
           document.getElementById("dateofbirth").style.borderColor = "#F00";
        }
    else
        {
            document.getElementById("dateofbirth").style.borderColor = "#0F0";
        }
}

function checkEmail()
{
    let emailcheck = document.getElementById("email").value.split("@");
    emailcheck[1] = "@" + emailcheck[1];
    
    if(emailcheck[0].length > 0 && (emailcheck[1] === "@gmail.com" || emailcheck[1] === "@hotmail.com" || emailcheck[1] === "@outlook.com" || emailcheck[1] === "@live.com" || emailcheck[1] === "@yahoo.com" || emailcheck[1] === "@aol.com" || emailcheck[1] === "@icloud.com" || emailcheck[1] === "@yandex.com")) // Stub, to be iterated over
        {
            document.getElementById("email").style.borderColor = "#0F0";
        }
    
    else
        {
            document.getElementById("email").style.borderColor = "#F00";
        }
}


function checkPassword()
{
    if(document.getElementById("password").value.length < 8)
        {
            document.getElementById("password").style.borderColor = "#F00";
            //document.getElementById("password").textContent = "Senha curta!";
        }
    
    else if(document.getElementById("password").value.length >= 8 && document.getElementById("password").value.length < 14)
        {
            document.getElementById("password").style.borderColor = "#FF0";
        }
    
    else if(document.getElementById("password").value.length >= 14)
        {
            document.getElementById("password").style.borderColor = "#0F0";
        }   
}

function comparePasswords()
{
    if(document.getElementById("passwordconfirm").value !== document.getElementById("password").value)
        {
            document.getElementById("passwordconfirm").style.borderColor = "#F00";
            //document.getElementById("passwordconfirm").textContent = "senhas não batem!";
        }
    
    else
        {
        document.getElementById("passwordconfirm").style.borderColor = "#0F0";
        }
}

function checkNumber()
{
    if(document.getElementById("housenumber").value <= 0)
        {
            document.getElementById("housenumber").value = 1;
        }
}