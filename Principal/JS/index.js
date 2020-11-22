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
    
    //Date field start
    if(document.getElementById("dateofbirth").value >= "2005-01-01" || document.getElementById("dateofbirth").value <= "1910-01-01")
        {
           document.getElementById("dateofbirth").style.borderColor = "#F00";
        }
    //Date field end
    
    
    if(document.getElementById("email").textContent !== "lal@gmail.com") // Stub, to be iterated over
        {
            document.getElementById("email").style.borderColor = "#F00";
        }
    
    if(document.getElementById("password").value.length <= 8) // Stub, to be iterated over
        {
            document.getElementById("password").style.borderColor = "#F00";
            //document.getElementById("password").textContent = "Senha curta!";
        }
    if(document.getElementById("passwordconfirm").value !== document.getElementById("password").value) // Stub, to be iterated over
        {
            document.getElementById("passwordconfirm").style.borderColor = "#F00";
            //document.getElementById("passwordconfirm").textContent = "senhas não batem!";
        }
    
    alert(document.getElementById("dateofbirth").value);
}