$(document).ready(function () {
    const table = $("#datatables").DataTable({
        data: [],
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Email" },
            { title: "Date of Birth" },
        ],
    });

    axios
        .get("https://random-data-api.com/api/v2/users?size=100")
        .then((response) => {
            const data = response.data.map((user) => [
                `${user.first_name} ${user.last_name}`,
                user.employment.title,
                user.address.city,
                user.email,
                formatDate(user.date_of_birth),
            ]);

            table.clear().rows.add(data).draw();
        })
        .catch((error) => {
            console.error("Erro ao fazer a requisição:", error);
        });
});

function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
