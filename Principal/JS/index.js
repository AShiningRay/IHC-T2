function errorFields_hide(fieldname)
{
    if(fieldname === "firstname")
    {
        document.getElementById("text_error_last_name").style.marginLeft = "58%";

        document.getElementById("text_error_name").style.display = "none";
    }

    if(fieldname === "lastname")
    {   
        document.getElementById("text_error_last_name").style.display = "none";
    }

    if(fieldname === "street")
    {
        document.getElementById("house_number_error").style.marginLeft = "82%";

        document.getElementById("street_error").style.display = "none";
    }

    if(fieldname === "housenumber")
    {
        document.getElementById("house_number_error").style.display = "none";
    }

    if(fieldname === "district")
    {

        document.getElementById("city_error").style.marginLeft = "68%";
         
        document.getElementById("district_error").style.display = "none";
    }
 
    if(fieldname === "city")
    {
        document.getElementById("city_error").style.display = "none";
    }

    if(fieldname === "dateofbirth")
    {

        document.getElementById("email_error").style.marginLeft = "70%";
        
        document.getElementById("date_error").style.display = "none";
    }

    if(fieldname === "email")
    {
        document.getElementById("email_error").style.display = "none";
    }

    if(fieldname === "password")
    {
        document.getElementById("password_confirm_error").style.marginLeft = "72%";

        document.getElementById("password_error").style.display = "none";
    }

    if(fieldname === "passwordconfirm")
    {
        document.getElementById("password_confirm_error").style.display = "none";
    }

}
 
function errorFields_show(fieldname)
{
    if(fieldname === "firstname")
    {
        document.getElementById("text_error_last_name").style.marginLeft = "18%";
        
        document.getElementById("text_error_name").style.display = "inline-block";
    }

    if(fieldname === "lastname")
    {
        document.getElementById("text_error_last_name").style.display = "inline-block";
    }

    if(fieldname === "street")
    {
        document.getElementById("house_number_error").style.marginLeft = "35.5%";
        
        document.getElementById("street_error").style.display = "inline-block";
    }

    if(fieldname === "housenumber")
    {
        document.getElementById("house_number_error").style.display = "inline-block";
    }

    if(fieldname === "district")
    {
        document.getElementById("city_error").style.marginLeft = "22%";
        
        document.getElementById("district_error").style.display = "inline-block";
    }

    if(fieldname === "city")
    {
        document.getElementById("city_error").style.display = "inline-block";
    }

    if(fieldname === "dateofbirth")
    {
        document.getElementById("email_error").style.marginLeft = "20%";
        
        document.getElementById("date_error").style.display = "inline-block";
    }

    if(fieldname === "email")
    {
        document.getElementById("email_error").style.display = "inline-block";
    }

    if(fieldname === "password") //35%
    {
        
        document.getElementById("password_confirm_error").style.marginLeft = "35%";

        document.getElementById("password_error").style.display = "inline-block";
    }

    if(fieldname === "passwordconfirm")
    {
        document.getElementById("password_confirm_error").style.display = "inline-block";
    }

}

function checkFields()
{
    let check = true;
    if(document.getElementById("firstname").value.length < 2)
        {
            document.getElementById("firstname").style.borderColor = "#F00";
            check = false

            document.getElementById("text_error_last_name").style.marginLeft = "18%";

            document.getElementById("text_error_name").style.display = "inline-block";
        }
    
    if(document.getElementById("lastname").value.length < 2)
        {
            document.getElementById("lastname").style.borderColor = "#F00";
            check = false
            document.getElementById("text_error_last_name").style.display = "inline-block";
        }


    if(document.getElementById("street").value.length < 2)
        {
            document.getElementById("street").style.borderColor = "#F00";
            check = false

            document.getElementById("house_number_error").style.marginLeft = "35.5%";

            document.getElementById("street_error").style.display = "inline-block";
        }
    
    if(document.getElementById("district").value.length < 2)
        {
            document.getElementById("district").style.borderColor = "#F00";
            check = false

            document.getElementById("city_error").style.marginLeft = "22%";

            document.getElementById("district_error").style.display = "inline-block";
        }
    
    if(document.getElementById("city").value.length < 2)
        {
            document.getElementById("city").style.borderColor = "#F00";
            check = false

            document.getElementById("city_error").style.display = "inline-block";
        }

    if(document.getElementById("password").value.length < 8)
    {
        document.getElementById("password").style.borderColor = "#F00";
        check = false

        document.getElementById("password_confirm_error").style.marginLeft = "35%";

        document.getElementById("password_error").style.display = "inline-block";
    }

    if (comparePasswords() === 0)
        check = false
    if (checkPassword() === 0)
        check = false
    if (checkNumber() === 0)
        check = false
    if (checkEmail() === 0)
        check = false
    if (checkDate() === 0)
        check = false


    if (check === true)
        window.location.href = "./successful.html"; //redirecionando pra essa página ppenas para realizar o teste pra ver se todos os campos estão sendo verificados corretamente.

}

function checkTextField(fieldname)
{
    if(document.getElementById(fieldname).value.length < 2)
        {
            document.getElementById(fieldname).style.borderColor = "#F00";
            errorFields_show(fieldname);
        }
    else
        {
            document.getElementById(fieldname).style.borderColor = "#0F0";
            errorFields_hide(fieldname);
        }
}

function checkDate()
{
    if(document.getElementById("dateofbirth").value >= "2005-01-01" || document.getElementById("dateofbirth").value <= "1910-01-01")
        {
           document.getElementById("dateofbirth").style.borderColor = "#F00";
            errorFields_show("dateofbirth");
            return 0;
        }
    else
        {
            document.getElementById("dateofbirth").style.borderColor = "#0F0";
            errorFields_hide("dateofbirth");
            return 1;
        }
}

function checkEmail()
{
    let emailcheck = document.getElementById("email").value.split("@");
    emailcheck[1] = "@" + emailcheck[1];
    
    if(emailcheck[0].length > 0 && (emailcheck[1] === "@gmail.com" || emailcheck[1] === "@hotmail.com" || emailcheck[1] === "@outlook.com" || emailcheck[1] === "@live.com" || emailcheck[1] === "@yahoo.com" || emailcheck[1] === "@aol.com" || emailcheck[1] === "@icloud.com" || emailcheck[1] === "@yandex.com")) // Stub, to be iterated over
        {
            document.getElementById("email").style.borderColor = "#0F0";
            errorFields_hide("email");
            return 1;
        }
    
    else
        {
            document.getElementById("email").style.borderColor = "#F00";
            errorFields_show("email");
            return 0;
        }
}


function checkPassword()
{
    if (document.getElementById("passwordconfirm").value === "")
        document.getElementById("passwordconfirm").style.borderColor = "#F00";

    if(document.getElementById("password").value.length < 8)
        {
            document.getElementById("password").style.borderColor = "#F00";
            //document.getElementById("password").textContent = "Senha curta!";
            errorFields_show("password");
            return 0;
        }
    
    else if(document.getElementById("password").value.length >= 8 && document.getElementById("password").value.length < 14)
        {
            document.getElementById("password").style.borderColor = "#FF0";
            errorFields_hide("password");
            return 1;
        }
    
    else if(document.getElementById("password").value.length >= 14)
        {
            document.getElementById("password").style.borderColor = "#0F0";
            errorFields_hide("password");
            return 1;
        }

}

function comparePasswords()
{
    if(document.getElementById("passwordconfirm").value !== document.getElementById("password").value)
        {
            document.getElementById("passwordconfirm").style.borderColor = "#F00";
            //document.getElementById("passwordconfirm").textContent = "senhas não batem!";
            errorFields_show("passwordconfirm");
            return 0;
        }
    
    else
        {
        document.getElementById("passwordconfirm").style.borderColor = "#0F0";
            errorFields_hide("passwordconfirm");
            return 1;
        }
}

function checkNumber()
{
    if(parseFloat(document.getElementById("housenumber").value) < 1 || document.getElementById("housenumber").value === "")
        {
            document.getElementById("housenumber").style.borderColor = "#F00";
            errorFields_show("housenumber");
            return 0;
        }
    else if(parseFloat(document.getElementById("housenumber").value) >=1 && Number.isInteger(parseFloat(document.getElementById("housenumber").value)) === true)
    {
        document.getElementById("housenumber").style.borderColor = "#0F0";
        errorFields_hide("housenumber");
        return 1;

    }

    else if(parseFloat(document.getElementById("housenumber").value) >=1 && Number.isInteger(parseFloat(document.getElementById("housenumber").value)) === false)
    {
        document.getElementById("housenumber").style.borderColor = "#F00";
        errorFields_show("housenumber");
        return 0;
    }


}