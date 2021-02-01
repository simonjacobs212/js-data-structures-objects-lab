// Write your solution in this file!

const driver = {}


function updateDriverWithKeyAndValue(driver, key, value){
    let new_obj = Object.create({}, driver);
    new_obj.push({key : value})
    return new_obj
}

// function createNewMenu (oldMenu, menuChanges) {
//     return Object.assign({}, oldMenu, menuChanges);
//   }