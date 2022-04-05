const searchbar = document.getElementById("searchbar");
const textCity = document.getElementById("text_ciy");
const tempStatus = document.getElementById("temp_status");
const iconContainer = document.getElementById("icon_i");
const submit = document.getElementById("submit");
const temp = document.getElementById("temp");


const func = async () => {
  let cityValue = searchbar.value;

  if (cityValue === "") {
    textCity.innerHTML = "please Enter a valid city name ";
    temp.classList.add("data_hide")
} else {
      temp.classList.remove("data_hide")
      try{
          
          let apiLink = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=714277882dfd11105c11ac81f1783d59`;
          const fetchedData = await fetch(apiLink);
          const parsedData = await fetchedData.json();
          const arrData = [parsedData];
          console.log(arrData);
          textCity.innerHTML = cityValue + "," + arrData[0].sys.country;
    tempStatus.innerHTML = `${arrData[0].main.temp}<sup>o</sup>C`;
    console.log(arrData[0].weather[0].main);
    
    if (arrData[0].weather[0].main == "Clouds") {
      iconContainer.classList.remove("fa-cloud");
      iconContainer.classList.add("fa-cloud");
    } else if (arrData[0].weather[0].main == "Clear") {
        console.log("its cfleart");
      iconContainer.classList.remove("fa-cloud");
      iconContainer.classList.add("fa-sun");
    } else if (arrData[0].weather[0].main == "Haze") {
        console.log("its cfleart");
      iconContainer.classList.remove("fa-cloud");
      iconContainer.classList.add("fa-smog");
    } else {
        iconContainer.classList.remove("fa-cloud");
    }
        }
        catch{
            textCity.innerHTML = "please Enter a valid city name ";
            temp.classList.add("data_hide")


        }
}
};

submit.addEventListener("click", func);
