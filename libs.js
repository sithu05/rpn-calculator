// Assigned Object because of recursion
const libs = {
  RPNCalcuation: (list) => {
    // search operators
    let index = list.findIndex((val) => {
      if (val === '+') {
        return true;
      } else if (val === '-') {
        return true;
      } else if (val === '/') {
        return true;
      } else if (val === '*') {
        return true;
      } else {
        return false;
      }
    });

    // found operator
    if (index >= 0) {

      // use eval to calculate maths and then update to list
      list[index] = eval(`${list[index - 2]} ${list[index]} ${list[index - 1]}`);

      // remove from the list, previous calculated number
      list.splice(index - 2, 2);

      return libs.RPNCalcuation(list);
    } else {
      return list.join(' ');
    }
  }
}

module.exports = libs;