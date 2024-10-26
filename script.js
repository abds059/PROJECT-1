let btnelement = document.getElementById("btn");
const jokeelement = document.getElementById("joke");

const apikey = "bNfcIt16IArpNj2PlBputQ==9HOxdncv0ezMDbv6";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
}

const apiURL = "https://api.api-ninjas.com/v1/jokes"

async function getjoke(){
    try{
    jokeelement.innerText = "Updating..."
    btnelement.disabled = true;
    btnelement.innerText = "Loading..."

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnelement.disabled = false;
    btnelement.innerText = "TELL ME A JOKE"

    jokeelement.innerText = data[0].joke;
    }
    catch(error){
        jokeelement.innerText = "An error happened. Try again later!"

        btnelement.disabled = false;
        btnelement.innerText = "TELL ME A JOKE"

    }
}

btnelement.addEventListener("click", getjoke);


