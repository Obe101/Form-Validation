window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}
function main():void {
    isTxtPresent("first-name", "First Name is Required");
    isTxtPresent("last-name", "Last Name is Required");
}
/**
 * Returns true if the textBox with given id 
 * has some text inside it  
 * @param id The id of the <input type="text"> to validate
 * 
 * @param errMsg The message to display in the sibling span
 * of the textbox
 */
function isTxtPresent(id:string, errMsg:string):boolean {
    alert("Reg button was clicked");
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue = "") {
        let errSpan = <HTMLElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
