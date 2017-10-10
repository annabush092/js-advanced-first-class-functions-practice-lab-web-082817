// Code your solution in this file!
function logDriverNames(driverObjArray) {
  driverObjArray.forEach(function (el, i, arr) {
      console.log(el.name)
    }
  )
  //logs name attribute of each driver to console
}

function logDriversByHometown(driverObjArray, location) {
  driverObjArray.forEach(
    function(el, i, arr) {
      if (el.hometown === location) {
        console.log(el.name);
      }
    }
  )
  //logs name of each driver whose hometown matches location
}

function driversByRevenue(driverObjArray) {
  newDrivers = [...driverObjArray]
  return newDrivers.sort(
    function (a, b) {
      return [a.revenue] - [b.revenue];
    }
  )
  //returns new array of driver objects sorted by revenue attribute low -> high
}

function driversByName(driverObjArray) {
  newDrivers = [...driverObjArray];
  return newDrivers.sort(
    function(a, b) {
      return a.name.localeCompare(b.name);
    }
  )
  //String.prototype.localeCompare()
  //returns new array of driver objects sorted by name attribute A - Z
}

function totalRevenue(driverObjArray) {
  return driverObjArray.reduce(
    function(agg, el, i, arr){
      return agg += el.revenue;
    }, 0);
  //returns sum of revenue earned by each driver
}

function averageRevenue(driverObjArray) {
  return totalRevenue(driverObjArray) / driverObjArray.length;
  //returns average revenue earned by each driver
}
