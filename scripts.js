function calculate(marks, total) {
    let x = total - marks;
    return x * 2;
}

function insert(res, pos) {
    const node = document.createElement("div");
    const textnode = document.createTextNode(res);
    node.appendChild(textnode);
    document.getElementById(pos).appendChild(node);
}

function clear(pos){
    document.getElementById(pos).innerHTML = "";
}

function run(marks) {
    const errorDiv = document.getElementById("errorDisp");
    if (marks.trim() === "") {
        errorDiv.textContent = "Please enter your marks.";
        clear("res10");
        clear("res9");
        clear("res8");
        clear("res7");
        return;
    }
    let markValue = Number(marks);
    if (isNaN(markValue) || markValue < 0 || markValue > 50) {
        errorDiv.innerHTML = "Marks must be between 0 - 50.";
        clear("res10");
        clear("res9");
        clear("res8");
        clear("res7");
        return;
    }

    const targets = [
        { id: "res10", total: 90 },
        { id: "res9", total: 80 },
        { id: "res8", total: 70 },
        { id: "res7", total: 60 }
    ];

    targets.forEach(({ id, total }) => {
        clear(id);
        const result = calculate(markValue, total);

        // Show "Not obtainable" if the score is more than 100
        const displayText = result > 100 ? "Not obtainable" : result;
        insert(displayText, id);
    });
}

document.getElementById("submit").addEventListener("click", () => {
    const marks = document.getElementById("marks").value;
    run(marks);
});

document.getElementById("marks").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const marks = event.target.value;
        run(marks);
    }
});
