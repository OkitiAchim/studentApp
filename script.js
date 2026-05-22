// JAVASCRIPT REFRESHER

// let example
let course = "Advanced Frontend";
course = "JavaScript Refresher";

console.log("Course:", course);

// const example
const school = "Flexisaf";

console.log("School:", school);

// Array of student objects
const students = [
  {
    name: "David",
    score: 85,
  },
  {
    name: "Sarah",
    score: 62,
  },
  {
    name: "Michael",
    score: 91,
  },
  {
    name: "Esther",
    score: 74,
  },
  {
    name: "Daniel",
    score: 58,
  },
];

// forEach example
students.forEach((student) => {
  console.log(`${student.name} scored ${student.score}`);
});

// filter example
const passedStudents = students.filter((student) => student.score >= 70);

console.log("Passed Students:", passedStudents);

// reduce example
const totalScore = students.reduce((sum, student) => {
  return sum + student.score;
}, 0);

console.log("Total Score:", totalScore);

// average score
const average = totalScore / students.length;

console.log("Average Score:", average);

// map example + DOM rendering
const studentCards = students.map((student) => {
  return `
    <div class="student-card">
      <h2>${student.name}</h2>
      <p>Score: ${student.score}</p>
      <p class="${student.score >= 70 ? "pass" : "fail"}">
        ${student.score >= 70 ? "Passed" : "Failed"}
      </p>
    </div>
  `;
});

// Display cards on webpage
document.getElementById("students").innerHTML = studentCards.join("");

// Display summary
document.getElementById("totalStudents").textContent =
  `Total Students: ${students.length}`;

document.getElementById("averageScore").textContent =
  `Average Score: ${average.toFixed(2)}`;
