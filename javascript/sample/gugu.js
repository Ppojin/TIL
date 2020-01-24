
const guguOneColumn = () => {
    const table = $("<table>");
    for(let i=1 ; i<10 ; i++){
        let tr = $("<tr>");
        for(let j=1 ; j<10 ; j++){
            tr.append($("<td>").text( String(j) + " * " + String(i) + " = " + String(i*j) ));
        };
        table.append(tr);
    };
    $("body").append(table);
};

const guguTable = () => {
    const table = $("<table>");
    for(let j=1 ; j<10 ; j++){
        for(let i=1 ; i<10 ; i++){
            let tr = $("<tr>");
            tr.append($("<td>").text( String(j) + " * " + String(i) + " = " + String(i*j) ));
            table.append(tr);
        };
    };
    $("body").append(table);
};

const guguSelect = () => {
    const value = prompt();
    const table = $("<table>");
    for(let i=1 ; i<10 ; i++){
        let tr = $("<tr>");
        tr.append($("<td>").text( value + " * " + String(i) + " = " + String(Number(value)*i) )); // Number() = parseInt()
        table.append(tr);
    };
    $("#cc").append(table);
};