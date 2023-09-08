const gradation = {
  20: "satisfactory",
  55: "good",
  85: "very-good",
  100: "excellent",
};

const users = [
  {
    name: "Jack Smith",
    age: 23,
    img: "JackSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 20,
      },
      {
        title: "Java Enterprise",
        mark: 100,
      },
    ],
  },

  {
    name: "Amal Smith",
    age: 20,
    img: "AmalSmith",
    role: "student",
  },

  {
    name: "Noah Smith",
    age: 43,
    img: "NoahSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 50,
      },
    ],
  },

  {
    name: "Charlie Smith",
    age: 18,
    img: "CharlieSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 75,
      },
      {
        title: "Java Enterprise",
        mark: 23,
      },
    ],
  },

  {
    name: "Emily Smith",
    age: 30,
    img: "EmilySmith",
    role: "admin",
    courses: [
      {
        title: "Front-end Pro",
        score: 10,
        lector: "Leo Smith",
      },
      {
        title: "Java Enterprise",
        score: 50,
        lector: "David Smith",
      },
      {
        title: "QA",
        score: 75,
        lector: "Emilie Smith",
      },
    ],
  },

  {
    name: "Leo Smith",
    age: 253,
    img: "LeoSmith",
    role: "lector",
    courses: [
      {
        title: "Front-end Pro",
        score: 78,
        studentsScore: 79,
      },
      {
        title: "Java Enterprise",
        score: 85,
        studentsScore: 85,
      },
    ],
  },
];

class User {
  constructor(obj) {
    Object.assign(this, obj);
  }

  render() {
    const photo = `<img src="./images/users/${this.img}.png" alt="${this.name}" height="50">`;
    const userInfoRole = `<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">`;

    document.write(` 
    <div class="user">
      <div class="user__info">
        <div class="user__info--data">
          ${photo}
          <div class="user__naming">
            <p>Name: <b>${this.name}</b></p>
            <p>Age: <b>${this.age}</b></p>
          </div>
        </div>
        <div class="user__info--role ${this.role}">
          ${userInfoRole}  
          <p>${this.role}</p>
        </div>
      </div>
      ${this.courses ? this.renderCourses() : ''}
    </div>`);
  }

  renderCourses() {
    const listCourses = this.courses.map((course) => {
      const gradation = this.getGradation(course.mark);

      return `<p class="user__courses--course ${this.role}">${course.title} <span class="${gradation}">${gradation}</span></p>`;
    });

    return `<div class="user__courses">${listCourses.join(``)}</div>`;
  }

  getGradation(mark) {
    return Object.keys(gradation).reduce((result, currentValue) => {
      if (mark <= currentValue && !result) {
        return gradation[currentValue];
      } else {
        return result;
      }
    }, ``);
  }
}

class Student extends User {
  constructor(obj) {
    super(obj);
  }
}

class Lector extends User {
  constructor(obj) {
    super(obj);
  }

  renderCourses() {
    const listCourses = this.courses.map((course) => {
      const gradation = this.getGradation(course.score);
      const gradationStudentScore = this.getGradation(course.studentsScore);

      return `
      <div class="user__courses--course lector">
        <p>Title: <b>${course.title}</b></p>
        <p>Lector's score: <span class="${gradation}">${gradation}</span></p>
        <p>Average student's score: <span class="${gradationStudentScore}">${gradationStudentScore}</span></p>
      </div>`
    });

  return `<div class="user__courses admin--info">${listCourses.join(``)}</div>`
  }
}

class Admin extends User {
  constructor(obj) {
    super(obj);
  }

  renderCourses() {
    const listCourses = this.courses.map((course) => {
      const gradation = this.getGradation(course.score);

      return `
      <div class="user__courses--course admin">
        <p>Title: <b>${course.title}</b></p>
        <p>Admin's score: <span class="${gradation}">${gradation}</span></p>
        <p>Lector: <b>${course.studentsScore}</b></p>
      </div>`;
    });

  return `<div class="user__courses admin--info">${listCourses.join(``)}</div>`
  }
}

const USER_ROLES = {
  student: (obj) => new Student(obj),
  admin: (obj) => new Admin(obj),
  lector: (obj) => new Lector(obj),
};

const renderTable = (users) => {
  users.forEach((obj) => {
    let userRole = obj.role;
    let user = USER_ROLES[userRole] ? USER_ROLES[userRole](obj) : new User(obj);

    user.render();
  }
)}

document.write(`<div class="users">`)
renderTable(users)
document.write(`</div>`)
