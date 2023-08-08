hero = [`Ivan`];
native = [`York`, `Of`];
destination = [`Poltava`, `In`];

arr = destination.concat(native, hero).reverse(); //'Ivan', 'Of', 'York', 'In', 'Poltava'
rainbow = arr.slice();

rainbow.shift();
rainbow.unshift(`Richard`);
rainbow.splice(3, 0, `Gave`, `Battle`);
rainbow.pop();
rainbow.push(`Vain`);

// alternative way

// rainbow.splice(0, 1, `Richard`);
// rainbow.splice(4, 1, `Vain`);
// rainbow.splice(3, 0, `Gave`,`Battle`);

document.write(`<ul>`);

for (i = 0; i < rainbow.length; i++) {
  document.write(`<li class="list_item__${i}">${rainbow[i]}</li>`);
}

document.write(`</ul>`);
