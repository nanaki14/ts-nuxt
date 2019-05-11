// ______________________________________________________
//
export interface S {
  count: number
}

// ______________________________________________________
//
export interface G {
  double: number
  expo2: number
  expo: (amount: number) => number
}
export interface RG {
  'sample/double': G['double']
  'sample/expo2': G['expo2']
  'sample/expo': G['expo']
}
// ______________________________________________________
//
export interface M {
  setCount: { amount: number }
  multi: number
  increment: void
  decrement: void
}
export interface RM {
  'sample/setCount': M['setCount']
  'sample/multi': M['multi']
  'sample/increment': M['increment']
  'sample/decrement': M['decrement']
}
// ______________________________________________________
//
export interface A {
  asyncSetCount: { amount: number }
  asyncMulti: number
  asyncIncrement: void
  asyncDecrement: void
}
export interface RA {
  'sample/asyncSetCount': A['asyncSetCount']
  'sample/asyncMulti': A['asyncMulti']
  'sample/asyncIncrement': A['asyncIncrement']
  'sample/asyncDecrement': A['asyncDecrement']
}
