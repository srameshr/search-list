import { userData } from '../mocks/index';

// A simple, quick, pure function to search users based on mock.
export const searchUsers = (query) => {
    return userData.filter(user => Object.keys(user).find(key => {
        if (user[key] instanceof Array && user[key].includes(query)) {
            return true;
        }
        return (new RegExp(query, "ig").test(user[key]))
    })
    );
}
