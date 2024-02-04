document.querySelector("#fileInput").addEventListener("change", (e) => {

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {

        const content = e.target.result;
        const lines = content.split("\n");

        lines.forEach(line => {
            const [name, surname, age, phone, mail] = line.split(",");
            renderData(name, surname, age, phone, mail);
        });
    }

    reader.readAsText(file);
});


function renderData(name, surname, age, phone, mail) {
    const thead = document.querySelector("#thead");
    const tbody = document.querySelector("#tbody");
    const saveBtn = document.querySelector("#saveBtn");

    thead.innerHTML =
        `
            <tr>
                <th>Name:</th>
                <th>Surame:</th>
                <th>Age:</th>
                <th>Phone:</th>
                <th>Mail:</th>
            </tr>
        `;


    tbody.innerHTML +=
        `
            <tr>
                <td>${name}</td>
                <td>${surname}</td>
                <td>${age}</td>
                <td>${phone}</td>
                <td>${mail}</td>
            </tr>
        `;

    if (document.querySelector("tr")) {
        saveBtn.classList.add("active");
    } else {
        saveBtn.classList.remove("active");
    }

};

// document.querySelector("#saveBtn").addEventListener("click", async () => {

//     const data = {
//         name: "Alsasai",
//         surname: "Imanov",
//         age: "26",
//         phone: "+994 70 558 54 88",
//         mail: "ali@mail.ru",
//     }

//     await fetch("http://localhost:3000/users", {
//         method: "POST",
//         body: JSON.stringify(data),
//     })
//         .then(() => console.log("Good"))
//         .catch(error => console.log(error));
// });