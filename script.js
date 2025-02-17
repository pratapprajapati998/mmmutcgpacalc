function addRow() {
    var table = document.getElementById("subjects");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = '<input type="text" class="subject-name" placeholder="Enter subject name">';
    cell2.innerHTML = '<input type="number" class="marks" min="0" max="100">';
    cell3.innerHTML = '<input type="number" class="credits" min="1" max="5">';
    cell4.className = "grade-point";
    cell5.className = "grade";
}

function removeLastRow() {
    var table = document.getElementById("subjects");
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    } else {
        alert('At least one subject is required.');
    }
}

function calculateCGPA() {
    var table = document.getElementById("subjects");
    var rows = table.rows;
    var totalGradePoints = 0;
    var totalCredits = 0;
    
    for (var i = 0; i < rows.length; i++) {
        var marks = parseInt(rows[i].querySelector(".marks").value);
        var credits = parseInt(rows[i].querySelector(".credits").value);
        var gradePoint = calculateGradePoint(marks);

        if (!isNaN(marks) && !isNaN(credits)) {
            totalGradePoints += gradePoint * credits;
            totalCredits += credits;
            rows[i].querySelector(".grade-point").innerText = gradePoint.toFixed(2);
            rows[i].querySelector(".grade").innerText = convertGrade(marks);
        }
    }

    var cgpa = totalGradePoints / totalCredits;
    document.getElementById("result").innerText = "CGPA: " + cgpa.toFixed(2);
}

function calculateGradePoint(marks) {
    if (marks >= 90 && marks <= 100) return 10;
    if (marks >= 80 && marks <= 89) return 9;
    if (marks >= 70 && marks <= 79) return 8;
    if (marks >= 60 && marks <= 69) return 7;
    if (marks >= 50 && marks <= 59) return 6;
    if (marks >= 40 && marks <= 49) return 5;
    if (marks < 40) return 0;
    return 0;
}

function convertGrade(marks) {
    if (marks >= 90 && marks <= 100) return 'A+';
    if (marks >= 80 && marks <= 89) return 'A';
    if (marks >= 70 && marks <= 79) return 'B+';
    if (marks >= 60 && marks <= 69) return 'B';
    if (marks >= 50 && marks <= 59) return 'C';
    if (marks >= 40 && marks <= 49) return 'D';
    if (marks < 40) return 'F';
    return '';
}
    