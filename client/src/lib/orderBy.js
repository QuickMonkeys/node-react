const orderBy = (list, by) => by === undefined ? orderBy(list, byLastName) : list.sort((a,b) => {return by(a,b)});

const byLastName = (a,b) => (a.last_name > b.last_name) ? 1 : ((b.last_name > a.last_name) ? -1 : 0);

const byFirstName = (a,b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0);


export {orderBy, byLastName, byFirstName};