export const CONSTANT = {
  server: "http://localhost:4000/",
  client: "http://localhost:3000/",
  RAPID_API_KEY: "REDACTED_RAPID_API_KEY",
  RAPID_API_DOMAIN: "faceanalysis.p.rapidapi.com",
  moods: ["😀", "😞", "😡", "😲"],
  moodsMetaData: [{
    name:"happy",
    index:0
  },{
    name:"sad",
    index:1
  },{
    name:"angry",
    index:2
  },{
    name:"surprise",
    index:3
  }],
};

export const checkLoginFromLogin = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data
    ? true
    : false;
};

export const checkLoginFromNonLogin = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data
    ? false
    : true;
};

export const Loader = (extra = "") => {
  return (
    <div class={`spinner-grow ${extra}`} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export const setMessage = (text, color) => {
  let error = document.getElementById("error");
  error.innerHTML = text;
  error.classList.add("text-" + color);
  error.style.display = "block";
};

export const resetMessage = () => {
  let error = document.getElementById("error");
  error.innerText = "";
  error.style.display = "none";
  error.classList.remove("text-danger");
  error.classList.remove("text-success");
};

export const isMessage = () => {
  let error = document.getElementById("error");
  if (error.style.display === "none") {
    return false;
  }
  return true;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
