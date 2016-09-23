// Some examples to sort the user's data .

// By default the byLastName is used to order the user's list.
const orderBy = (list, by = byLastName) => list.sort((a,b) => {return by(a,b)});

const byLastName = (a,b) => byField(a, b ,'last_name');

const byFirstName = (a,b) => byField(a, b ,'first_name');

const byField = (a,b, field) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0);

// As example, the byField is a private method. It's not possible to use byField in React's components
// exporting methods using destructuring
export {orderBy, byLastName, byFirstName};