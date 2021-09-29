export const validPh = (el: { ph: number; } ) => el.ph > 0 
export const validIbu = (el: { ibu: number; } ) => el.ibu > 0 
export const max = function(prev: { ph: number; }, current: { ph: number; }) {
  return (prev.ph > current.ph) ? prev : current
}

export const min = function(prev: { ph: number; }, current: { ph: number; }) {
  return (prev.ph < current.ph) ? prev : current
}

export const maxv = function(prev: { ibu: number; }, current: { ibu: number; }) {
  return (prev.ibu > current.ibu) ? prev : current
}

export const minv = function(prev: { ibu: number; }, current: { ibu: number; }) {
  return (prev.ibu < current.ibu) ? prev : current
}