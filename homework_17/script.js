const calendarData = {
    days: [`Monday`, `Tuesday`, `Friday`],
    hours: {
      start: 10,
      end: 17,
    },
    todos: [
      {
        day: `Monday`,
        hour: 10,
        title: `First todo`,
      },
      {
        day: `Monday`,
        hour: 13,
        title: `Second todo`,
      },
      {
        day: `Tuesday`,
        hour: 12,
        title: `Third todo`,
      },
      {
        day: `Tuesday`,
        hour: 17,
        title: `Fourth todo`,
      },
      {
        day: `Friday`,
        hour: 14,
        title: `Fifth todo`,
      },
    ],
};

const container = document.querySelector(`#container`);

const createTodo = (title) => {
    const todo = document.createElement(`div`);
    const h3 = document.createElement(`h3`);
    const btnDelete = document.createElement(`button`);

    todo.addEventListener(`click`, () => { todo.classList.toggle(`active`)});
    h3.innerHTML = title;
    btnDelete.innerHTML = `Delete`;

    btnDelete.addEventListener(`click`, (event) => {
        event.stopPropagation();
        todo.remove();
    })

    todo.append(h3, btnDelete);

    return todo;
}

const createTableThead = (obj) => {
    const thead = document.createElement(`thead`);
    thead.innerHTML = 
    `<tr>
        <th></th>
        ${obj.days.map(item => `<th>${item}</th>`).join(``)}
    </tr>`;

    return thead;
}

const createTableTbody = (obj) => {
    const tbody = document.createElement(`tbody`);
    const hours = getHours(obj.hours);
    
    hours.forEach(hour => {
        const tr = document.createElement(`tr`);
        const tdHour = document.createElement(`td`);

        tdHour.innerHTML = `${hour}:00`;
        tr.append(tdHour);

        obj.days.forEach(day => {
            const td = document.createElement(`td`);
            const todo = obj.todos.find((element) => element.day === day && element.hour === hour);

            if (todo) {
                td.append(createTodo(todo.title));
            }
            
            tr.append(td);
        });

        tbody.append(tr);
    });

    return tbody;
}

const getHours = (obj) => {
    const hours = [];
    let startHour = obj.start;
    let endHour = obj.end;

    for(; startHour <= endHour; startHour++) hours.push(startHour);

    return hours;
}

const createTable = (obj) => {
    const table = document.createElement(`table`);
    const thead = createTableThead(obj);
    const tbody = createTableTbody(obj);

    table.append(thead, tbody);

    return table;
}

container.append(createTable(calendarData));
