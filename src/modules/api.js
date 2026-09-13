export async function getWeather(location) {
  const apiKey = "RUREEWED44VRB4YMVXQ232KEW";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;

  const response = await fetch(url);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      `Weather API request failed (${response.status}): ${message}`,
    );
  }
  const data = await response.json();
  console.log(data.currentConditions.conditions);
  return data;
  // return {
  //   temperature: data.currentConditons.temp,
  //   conditions: data.currentConditons.conditions
  // };
}

// export async function loadWeather(data) {
//   // this function takes user input then uses it as t
// }

