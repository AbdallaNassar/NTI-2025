const navList = document.getElementById("nav");
navList.style.listStyleType = "square"; 
navList.style.listStylePosition = "inside";

navList.style.position = "absolute";
navList.style.top = "50%";
navList.style.left = "50%";
navList.style.transform = "translate(-50%, -50%)";


const originalImage = document.querySelector("#header img");
const imageCopyTopRight = originalImage.cloneNode(true); 
const imageCopyBottom = originalImage.cloneNode(true); 


const topRightDiv = document.createElement("div");
topRightDiv.style.position = "absolute";
topRightDiv.style.top = "20px";
topRightDiv.style.right = "30px";
topRightDiv.appendChild(imageCopyTopRight);
document.body.appendChild(topRightDiv);

const bottomDiv = document.createElement("div");
bottomDiv.style.position = "absolute";
bottomDiv.style.bottom = "20px";
bottomDiv.style.left = "30px";
bottomDiv.appendChild(imageCopyBottom);
document.body.appendChild(bottomDiv);


originalImage.style.display = "none";