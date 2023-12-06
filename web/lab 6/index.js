// Функція для збереження даних у куки
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    const expires = "expires="+d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
  }
  
  // Функція для отримання даних з куків
  function getCookie(cname) {
    const name = cname + "="
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }
  
  const dataTextArea = document.getElementById('dataTextArea')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')
  
  // Отримуємо дані з куки, якщо вони там є
  dataTextArea.value = getCookie('savedData')
  
  // Подія для збереження даних при зміні тексту в textarea
  dataTextArea.addEventListener('input', function() {
    setCookie('savedData', this.value, 30); // Зберігаємо дані в куках на 30 днів
  })
  
  // Події для переміщення по історії змін
  let historyIndex = 0;
  const historyData = getCookie('savedDataHistory') ? JSON.parse(getCookie('savedDataHistory')) : []
  
  prevBtn.addEventListener('click', function() {
    if (historyIndex > 0) {
      historyIndex--
      dataTextArea.value = historyData[historyIndex]
    }
  })
  
  nextBtn.addEventListener('click', function() {
    if (historyIndex < historyData.length - 1) {
      historyIndex++;
      dataTextArea.value = historyData[historyIndex]
    }
  })
  
  // Додаємо дані у історію змін при зміні тексту в textarea
  dataTextArea.addEventListener('input', function() {
    if (historyIndex < historyData.length - 1) {
      historyData.splice(historyIndex + 1)
    }
    historyData.push(this.value);
    historyIndex = historyData.length - 1
    setCookie('savedDataHistory', JSON.stringify(historyData), 30)// Зберігаємо історію в куках на 30 днів
  })


// Отримуємо посилання на елементи форми
const textInput = document.getElementById('textInput');
const textAreaInput = document.getElementById('textAreaInput');
const checkBoxInput = document.getElementById('checkBoxInput');
// Отримайте посилання на інші елементи форми

// Функція для збереження даних форми в Local Storage
function saveFormData() {
    localStorage.setItem('textInputValue', textInput.value);
    localStorage.setItem('textAreaInputValue', textAreaInput.value);
    localStorage.setItem('checkBoxInputChecked', checkBoxInput.checked);
    // Зберігайте інші дані форми в Local Storage
}

// Функція для відновлення даних форми з Local Storage
function restoreFormData() {
    const savedTextInputValue = localStorage.getItem('textInputValue');
    if (savedTextInputValue !== null) {
        textInput.value = savedTextInputValue;
    }

    const savedTextAreaInputValue = localStorage.getItem('textAreaInputValue');
    if (savedTextAreaInputValue !== null) {
        textAreaInput.value = savedTextAreaInputValue;
    }

    const savedCheckBoxInputChecked = localStorage.getItem('checkBoxInputChecked');
    if (savedCheckBoxInputChecked !== null) {
        checkBoxInput.checked = savedCheckBoxInputChecked === 'true';
    }
    // Відновлюйте інші дані форми з Local Storage
}

// Викликайте функцію відновлення даних форми при завантаженні сторінки
window.addEventListener('load', function() {
    restoreFormData();
});

// Викликайте функцію збереження даних форми при події submit
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(event) {
    saveFormData();
    // Можна також очистити Local Storage після відправки форми, якщо потрібно:
    // localStorage.clear();
});

  


// Клас, що описує студента
class Student {
  constructor(lastName, firstName, grades) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.grades = grades;
  }
}

// Клас для генерації html-коду таблиці зі списком студентів
class ListOfStudents {
  constructor(students) {
    this.students = students;
  }

  getTableList() {
    let table = '<table border="1">';
    table += '<tr><th>Last Name</th><th>First Name</th><th>Grades</th></tr>';

    this.students.forEach((student) => {
      table += `<tr><td>${student.lastName}</td><td>${student.firstName}</td><td>${student.grades.join(', ')}</td></tr>`;
    });

    table += '</table>';
    return table;
  }
}

// Клас, що успадковується від ListOfStudents та додає стилі та обраховує середній бал
class StylesTable extends ListOfStudents {
  constructor(students) {
    super(students);
  }

  getStyles() {
    return `
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: center;
        }
      </style>
    `;
  }

  getAvg(student) {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    const avg = sum / student.grades.length;
    return avg.toFixed(2);
  }

  getTotalAvg() {
    let totalSum = 0;
    let totalStudents = 0;

    this.students.forEach((student) => {
      totalSum += student.grades.reduce((acc, grade) => acc + grade, 0);
      totalStudents += student.grades.length;
    });

    const totalAvg = totalSum / totalStudents;
    return totalAvg.toFixed(2);
  }

  getTableList() {
    let tableWithStyles = this.getStyles();
    tableWithStyles += super.getTableList();

    this.students.forEach((student) => {
      const avg = this.getAvg(student);
      tableWithStyles = tableWithStyles.replace(`>${student.grades.join(', ')}</td>`, `>${student.grades.join(', ')} | Avg: ${avg}</td>`);
    });

    const totalAvg = this.getTotalAvg();
    tableWithStyles += `<p>Total Group Average: ${totalAvg}</p>`;

    return tableWithStyles;
  }
}

// Створення об'єктів класів та виведення результату
const students = [
  new Student('Doe', 'John', [85, 90, 78]),
  new Student('Smith', 'Alice', [92, 88, 95]),
  new Student('Johnson', 'Bob', [75, 82, 80]),
];

const studentsList = new ListOfStudents(students);
document.querySelector('student').innerHTML = `${studentsList.getTableList()}`

const styledStudentsList = new StylesTable(students);
console.log(styledStudentsList.getTableList());
