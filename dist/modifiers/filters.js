export const validPh = (el) => el.ph > 0;
export const validIbu = (el) => el.ibu > 0;
export const max = function (prev, current) {
    return (prev.ph > current.ph) ? prev : current;
};
export const min = function (prev, current) {
    return (prev.ph < current.ph) ? prev : current;
};
export const maxv = function (prev, current) {
    return (prev.ibu > current.ibu) ? prev : current;
};
export const minv = function (prev, current) {
    return (prev.ibu < current.ibu) ? prev : current;
};
