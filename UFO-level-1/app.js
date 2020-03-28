// from data.js
var tableData = data;
console.log(data);

// target the place "table" where data will be appended into
var tbody = d3.select("#target-table-display");

// Step 1: Loop Through `data` and console.log each UFO sighting object
data.forEach(function (data) {
    console.log(data);
});

// Step 2:  Use d3 to append one table row `tr` for each UFO sighting object; appending the `tr` elements.
data.forEach(function (data) {
    console.log(data);
    var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each UFO report value
data.forEach(function (data) {
    console.log(data);
    var row = tbody.append("tr");

    Object.entries(data).forEach(function ([key, value]) {
        console.log(key, value);
    });
});

//Step 4: Use d3 to append 1 cell per UFO report value (all the keys)
data.forEach(function (data) {
    console.log(data);
    var row = tbody.append("tr");

    Object.entries(data).forEach(function ([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Getting a reference to the button on the page with the id property set to `#filter-btn`
var button = d3.select("#filter-btn");

// implementing fuction to "filter table"
button.on("click", function () {
    tbody.html("");
    d3.event.preventDefault();
    console.log("For testing, click on 'Filter Table");
    var inputField = d3.select("#datetime");
    var inputElement = inputField.property("value");
    console.log(inputElement);

// use the "field input" to filter the data by "date" only
    var inputTypeArray = data.filter(one => one.datetime === inputElement);
    console.log(inputTypeArray)

// display in the html file (appends it at the end, after displaying all original data)
    inputTypeArray.forEach((selection) => {
        // for each "element" create a row
        var row = tbody.append("tr");

//below "object" becomes the targetet array (element)
        Object.entries(selection).forEach(([key, value]) => {
        var cell = row.append("td");
        // adds the "value" to each row in the table
        cell.text(value);
        });
    });
});












