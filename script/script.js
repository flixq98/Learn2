const form = document.querySelector("form");
const inputUser = document.getElementById("input-user");
const listGroup = document.querySelector(".list-group");
form.addEventListener("submit", function(event){
    listGroup.innerHTML += `
        <label class="list-group-item d-flex justify-content-between">
            <input class="form-check-input me-1" type="checkbox" value="">
            ${inputUser.value}
            <span><i class="bi bi-x" id="delete-btn"></i></span>
        </label>
    `
    inputUser.value = "";
    event.preventDefault();
});

listGroup.addEventListener("click", function(event){
    if(event.target.id  == "delete-btn" ){
        event.target.parentElement.parentElement.remove();
    };
})