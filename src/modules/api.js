export async function getWeather(location) {
  const apiKey = "RUREEWED44VRB4YMVXQ232KEW";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;

  const response = await fetch(url);
  if (!response.ok) {
    const message = await response.text();
    throw new error(
      `Weather API request failed (${response.status}): ${message}`,
    );
  }
  const data = await response.json();
  return {
    temperature: data.currentConditons.temp,
    conditions: data.currentConditons.conditions
  };
}

