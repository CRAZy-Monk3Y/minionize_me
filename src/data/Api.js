import axios from "axios";

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return `${serverURL}?text=${text}`;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server! try again after some time");
}

export async function translateText(text) {
  try {
    const response = await axios
      .get(getTranslationURL(text))
    return response;
  } catch (error) {
    errorHandler(error);
  }
}
