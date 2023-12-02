$(document).ready(function() {
    $('.pointer').on('click', function() {
        var index = $(this).index();
        sortTable(index);
    });
});

function sortTable(index) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("dataTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[index];
            y = rows[i + 1].getElementsByTagName("td")[index];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

new Tablesort(document.getElementById('dataTable'));

function filterTable() {
    var input, filter, table, tr, tdHost, tdComment, txtValueHost, txtValueComment, i;
    input = document.getElementById("filterTable");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        tdHost = tr[i].getElementsByTagName("td")[3];
        tdComment = tr[i].getElementsByTagName("td")[2];

        if (tdHost || tdComment) {
            txtValueHost = tdHost.textContent || tdHost.innerText;
            txtValueComment = tdComment.textContent || tdComment.innerText;

            if (txtValueHost.toUpperCase().indexOf(filter) > -1 || txtValueComment.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

document.getElementById("filterTable").addEventListener("keyup", filterTable);