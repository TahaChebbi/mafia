export function generateId(T: any) {
  var max = 0;
  if (T.length == 0) {
    return max;
  } else {
    for (let i = 0; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }

  return max;
}

export function deletee(id, key) {
  var objects = JSON.parse(localStorage.getItem(key) || "[]");
  var pos;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      pos = i;
      break;
    }
  }
  objects.splice(pos, 1);
  localStorage.setItem(key, JSON.stringify(objects));
}

export function searchById(id, key) {
  var objects = JSON.parse(localStorage.getItem(key) || "[]");
  var object;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      object = objects[i];
      break;
    }
  }
  return object;
}
