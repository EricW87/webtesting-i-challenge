module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20)
    item.enhancement++;

  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15)
    item.durability -= 5;

  if(item.enhancement >= 15)
    item.durability -= 10;

  if(item.enhancement > 16)
    item.enhancement--;


  if(item.durability < 0)
    item.durability = 0;
 
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if(item.enhancement > 0)
  {
    if(item.name[0] === '[' && item.name[1] === '+')
      item.name = item.name.split(" ")[1];
      
    item.name = "[+" + item.enhancement + "] " + item.name;
  }

  return { ...item };
}
