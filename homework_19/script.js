const theadTitles = [`Name`, `Comics`, `Favourite`, `Actions`];
const API = `https://6519440e818c4e98ac60353a.mockapi.io`;
const tableContainer = document.querySelector(`#tableContainer`);
const selectComics = document.querySelector(`select`);
const formHero = document.querySelector(`#listForm`);

let heroesList = [];

formHero.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  const newHero = {
    ...data,
    favourite: data.favourite ? true : false,
  }
  const isNameAlreadyExists = heroesList.some((hero) => hero.name === newHero.name);

  if (isNameAlreadyExists) {
    console.log(`This hero name already exists!`);
  } else {
    updateData(`heroes`, newHero, `POST`)
     .then(() => {
      createTable(tableContainer);
      e.target.reset();
     });
  }
});

const handleCheckboxClick = (e, hero) => {
  const updatedHero = {
    ...hero, 
    favourite: e.target.checked
  };

  e.target.disabled = true;

  updateData(`heroes`, updatedHero, `PUT`, hero.id)
    .then((data) => {
      e.target.value = data.favourite;
      e.target.checked = data.favourite;
    })
    .finally(() => {
      e.target.disabled = false;
    });
};

const handleDeleteButtonClick = (e, heroID) => {
  e.target.disabled = true;
  deleteData(`heroes`, heroID)
    .then(() => {
      createTable(tableContainer);
  });
}

const createTRs = (heros) => heros.map((hero) => {
  const tr = document.createElement(`tr`);

  theadTitles.forEach((title) => {
    const td = document.createElement(`td`);

    if (title === 'Favourite') {
      const checkbox = document.createElement(`input`);

      checkbox.type = 'checkbox';
      checkbox.name = 'favourite';
      checkbox.value = hero.favourite;
      checkbox.checked = hero.favourite;
      checkbox.addEventListener(`click`, (e) => handleCheckboxClick(e, hero));
      td.append(checkbox);
    } else if (title === 'Actions') {
      const buttonDelete = document.createElement(`button`);
      buttonDelete.innerText = `Delete`;
      buttonDelete.addEventListener(`click`, (e) => handleDeleteButtonClick(e, hero.id));
      td.append(buttonDelete);
    } else {
      td.innerText = hero[title.toLowerCase()];
    }

    tr.append(td);
  });

  return tr;
});

const createThead = (arr) => {
  const thead = document.createElement(`thead`);
  thead.innerHTML = 
  `<tr>
      ${arr.map(item => `<th>${item}</th>`).join(``)}
  </tr>`;

  return thead;
} 

const createTbody = (heros) => {
  const tbody = document.createElement(`tbody`);
  const trs = createTRs(heros);

  tbody.append(...trs);
  
  return tbody;
};

const getData = (path) => fetch(API + `/${path}`)
  .then((data) => {
      if(data.ok) return data.json();
      else return Promise.reject(data.status);
    }
);

const updateData = (path, body, method, id) => fetch(API + `/${path}${id ? `/${id}` : ``}`, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  }).then((data) => {
    if(data.ok) return data.json();
    else return Promise.reject(data.status);
  });

const deleteData = (path, id) => fetch(API + `/${path}/${id}`, {method: `DELETE`})
  .then((data) => {
    if (data.ok) return data.json();
    else return Promise.reject(data.status);
});

const createTable = (container) => {
  getData(`heroes`)
    .then(heros => {
      heroesList = heros;
      const table = document.createElement(`table`);
      const thead = createThead(theadTitles);
      const tbody = createTbody(heros);

      table.append(thead, tbody);

      if (container.childNodes.length > 0) {
        container.innerHTML = ``;
      }

      container.append(table);
    });
};

const createComicsOptions = (container) => {
  getData(`comics`)
   .then((comics) => {
    comics.forEach((comicBook) => {
      const option = document.createElement(`option`);

      option.innerText = comicBook.name;
      option.value = comicBook.name;
      container.append(option);
    });
   });
};

createTable(tableContainer);
createComicsOptions(selectComics);
