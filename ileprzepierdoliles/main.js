function countFinal()
{
    const money = document.getElementById("money").value;
    document.getElementById("results").style.visibility = "visible";
    const sasinNumber = Math.floor((Math.random()*7)+1);

    let howMuchSasins;

    if(money<70)
    {
        howMuchSasins = (money/7000).toString();
        howMuchSasins = howMuchSasins.substring(0,2) + "0000" + howMuchSasins.substring(2,howMuchSasins.length);
    }
    else howMuchSasins = money/70000000;

    if (money<70000000)
    {
        document.getElementById("results").innerHTML = 
        `
        Spokojnie, to i tak o ${70000000-money} zł mniej niż Sasin przepierdolił na wybory, które się nie odbyły.

        </br></br><img src="img/sasin${sasinNumber}.jpg"></img></br></br>

        Kwota którą przepierdoliłeś (${money} zł) wynosi w przeliczeniu ${howMuchSasins} sasina.
        `
    }

    else if (money==70000000)
    {
        document.getElementById("results").innerHTML = 
        `
        Niedobrze, to dokładnie tyle ile Sasin przepierdolił na wybory, które się nie odbyły.

        </br></br><img src="img/sasin${sasinNumber}.jpg"></img></br></br>

        Kwota którą przepierdoliłeś (${money} zł) wynosi w przeliczeniu ${howMuchSasins} sasina.
        `
    }

    else
    {
        document.getElementById("results").innerHTML = 
        `
        Powinieneś zacząć się martwić, to o ${money-70000000} zł więcej niż Sasin przepierdolił na wybory, które się nie odbyły.

        </br></br><img src="img/sasin${sasinNumber}.jpg"></img></br></br>

        Kwota którą przepierdoliłeś (${money} zł) wynosi w przeliczeniu ${howMuchSasins} sasina.
        `
    }
}


function countFinalCondition()
{
    if(document.getElementById("money").value == "" || document.getElementById("money").value == "0")
        alert("Podaj prawdziwą kwotę którą przepierdoliłeś");
    else countFinal();
}