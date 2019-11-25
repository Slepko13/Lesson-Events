function getSortingFirstName() {
    let table = document.getElementById("table");
    console.log(table.rows);
    let firstRow, secondRow;
    let sorting = 1;

    while (sorting < table.rows.length) {
        console.log(sorting);
        for (let i = 1; i < table.rows.length - 1; i++) {
            firstRow = Array.from(table.rows)[i].getElementsByTagName('td')[0];
            secondRow = Array.from(table.rows)[i + 1].getElementsByTagName('td')[0];
            console.log(firstRow);
            //console.log(secondRow);

            if (firstRow.innerText > secondRow.innerText) {
                //console.log(firstRow);
                table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);

            }
        }
        sorting++;
    }

}

function getSortingLastName() {
    let table = document.getElementById("table");
    console.log(table.rows);
    let firstRow, secondRow;
    let sorting = 1;

    while (sorting < table.rows.length) {

        for (let i = 1; i < table.rows.length - 1; i++) {
            firstRow = Array.from(table.rows)[i].getElementsByTagName('td')[1];
            secondRow = Array.from(table.rows)[i + 1].getElementsByTagName('td')[1];
            //console.log(firstRow);
            //console.log(secondRow);

            if (firstRow.innerText > secondRow.innerText) {
                //console.log(firstRow);
                table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);

            }
        }
        sorting++;
    }

}

function getSortingAge() {
    let table = document.getElementById("table");
    console.log(table.rows);
    let firstRow, secondRow;
    let sorting = 1;

    while (sorting < table.rows.length) {

        for (let i = 1; i < table.rows.length - 1; i++) {
            firstRow = Array.from(table.rows)[i].getElementsByTagName('td')[2];
            secondRow = Array.from(table.rows)[i + 1].getElementsByTagName('td')[2];
            //console.log(firstRow);
            //console.log(secondRow);

            if (+firstRow.innerText > +secondRow.innerText) {
                //console.log(firstRow);
                table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);

            }
        }
        sorting++;
    }

}