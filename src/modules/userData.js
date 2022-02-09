// A module that takes care of retrieving and storing the user's 
// course and app data.
import store from "store2";

let saveCount = 0;

/**
 * Saves all the year datas to the brower's local storage.
 * @param {Array} yearData 
 */
const saveYearData = (yearData) => {
  console.log(`${++saveCount} - Saving year data`);
  try {
    store.set("yearData", yearData);
  } catch (e) {
    throw e;
  }
};

/**
 * Retrieves the year data from the browser's local storage.
 * @returns {array}
 */
const getYearData = () => {
  let years = store.get("yearData");
  years = years ? years : [];
  return years;
};

/**
 * Saves the user's theme setting to local storage.
 * @param {string} theme 
 */
const saveTheme = (theme = "light") => {
  try {
    store.set("theme", theme);
  } catch (e) {
    throw e;
  }
};

const getTheme = () => {
  let theme = store.get("theme");
  theme = theme ? theme : "light";
  return theme;
};

/**
 * Supply the entire state of the program to save to local storage.
 * @param {Object} state 
 */
 const saveState = (state) => {
  if (!state)
    throw new Error("Attempting to save undefined or null state");
  
  try {
    saveYearData(state.years);
    saveTheme(state.theme);
  } catch (e) {
    throw e;
  }
};

const getState = () => {
  return {
    years: getYearData(),
    theme: getTheme(),
  };
};

const userDataFunctions = {
  saveState,
  getState,
  saveTheme,
  getTheme,
  saveYearData,
  getYearData,
};

export default userDataFunctions;
