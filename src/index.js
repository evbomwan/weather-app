import "./styles.css";
import { getWeather } from "./modules/api.js";

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  const location = document.getElementById("location").value;
  getWeather(location);
});
