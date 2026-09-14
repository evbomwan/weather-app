import "./styles.css";
import { getWeather } from "./modules/api.js";
import { showLoading, showError, showWeather, toggleUnit } from "./modules/ui.js"; 

const searchBtn = document.getElementById("search-btn");
const unitToggle = document.getElementById("unit-toggle");

searchBtn.addEventListener("click", async () => {
  const location = document.getElementById("location").value.trim();

  if(!location) {
    showError("Please enter a valid location");
    return;
  }

  showLoading();

  try {
    const data = await getWeather(location);
    const temp = Math.round(data.currentConditions.temp);
    const condition = data.currentConditions.conditions;

    showWeather(temp, condition);
  } catch (error) {
    console.error(error);
    showError();
  }
});
// Toggle
unitToggle.addEventListener("click", () => {
  toggleUnit();
})
