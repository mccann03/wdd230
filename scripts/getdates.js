const copyrightYear = document.querySelector("#copyrightYear");
copyrightYear.innerHTML = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = new Date(document.lastModified);
