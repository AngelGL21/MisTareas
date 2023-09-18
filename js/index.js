function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const tareaText = nuevaTareaInput.value;
    if (tareaText !== "") {
        const tareasList = document.getElementById("tareas");
        const li = document.createElement("li");

        li.innerHTML = `
            <input class="tachar" type="checkbox">
            <label class="labelt">${tareaText}</label>
            <button class="btneli">Eliminar</button>
        `;

        const checkbox = li.querySelector("input[type='checkbox']");
        const eliminarButton = li.querySelector("button");
        const tareaLabel = li.querySelector("label");

        eliminarButton.addEventListener("click", () => {
            li.remove();
            actualizarContadorTareas();
        });

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                //tareaLabel.style.textDecoration = "line-through"
                tareaLabel.style.color = "#FF4081"

                tareaLabel.classList.add("completed");
            } else {
                //tareaLabel.style.textDecoration = "none"
                tareaLabel.style.color = "#EEEEEE"
                tareaLabel.classList.remove("completed");
            }
            actualizarContadorTareas();
        });

        tareasList.appendChild(li);
        nuevaTareaInput.value = "";
        actualizarContadorTareas();
    }
}

function eliminarTareasCompletadas() {
    const tareasCompletadas = document.querySelectorAll(".completed");
    tareasCompletadas.forEach(tarea => tarea.parentElement.remove());
    actualizarContadorTareas();
}

function actualizarContadorTareas() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const contadorTarea = document.getElementById("contadorTarea");
    const contadorTarearestantes = document.getElementById("contadorTarearestantes");

    let completadas = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completadas++;
        }
    });

    contadorTarea.textContent = completadas;
    contadorTarearestantes.textContent = checkboxes.length - completadas;
}





