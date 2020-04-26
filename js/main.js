window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    isTxtPresent("first-name", "First Name is Required");
    isTxtPresent("last-name", "Last Name is Required");
}
function isTxtPresent(id, errMsg) {
    alert("Reg button was clicked");
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue = "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
