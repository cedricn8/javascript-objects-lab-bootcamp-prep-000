var recipes = {}

function updateObjectWithKeyAndValue(objecta, key, value) {
  return Object.assign({}, objecta , {[key]: value} )

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({} , object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}
=======
  object.key=value
  return object
}
>>>>>>> 6643e3a025bbd84623998535957c9c37f3218a7c
