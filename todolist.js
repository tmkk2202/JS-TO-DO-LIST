document.getElementById('addBtn').addEventListener('click', runthisfunc);

function runthisfunc() {
    const inputValue = document.getElementById("inputText").value;
    if (inputValue === "") return;

    const li = document.createElement('li');
    li.textContent = inputValue;

    const delBtn = document.createElement('button');
    delBtn.textContent = "Del";

    delBtn.onclick = function () {
        li.remove();
    }

    li.appendChild(delBtn);
    document.getElementById('uList').appendChild(li);

    document.getElementById("inputText").value = "";
    


}
