'use strict';



const parenser = (count) => {
  parenser.result = [];
  let str = '';
  _parenser(count, str, 0);
  return parenser.result;
};


const _parenser = (count, str, left) => {
  if(count){
    _parenser(count - 1, str + '{', left + 1);

    if(left)
      _parenser(count, str + '}', left - 1);
  }

  if(!count && left)
    _parenser(count, str + '}', left - 1);

  if(!count && !left)
    parenser.result.push(str);
};

module.exports = parenser;

//================================================

//Pseudo Code and hand testing different methods
//count and lefts as (c, l)
// 2, 0
// { 1, 1
// {{ 0, 2
// {} 1, 1
// {{} 0, 1
// {}{ 0, 1
// {{}} 0, 0
// {}{} 0, 0
//
// 3, 0
//
// { 2, 1
//
// {{ 1, 2
// {} 2, 1
//
// {{{ 0, 3
// {{} 2, 1
// {}{ 1, 2
//
// {{{} 0, 2
// {{}{ 0, 2
// {{}} 1, 0
// {}{{ 0, 2
// {}{} 1, 0
//
// {{{}} 0, 1
// {{}{} 0, 1
// {{}}{ 0, 1
// {}{{} 0, 1
// {}{}{ 0, 1
//
// {{{}}} 0, 0
// {{}{}} 0, 0
// {{}}{} 0, 0
// {}{{}} 0, 0
// {}{}{} 0, 0

//===========================================

// Other attempts to figure it out
// {{}}
// {}{} flip mid (1,2)
// 1 + 1
//
// Output :
// {{{}}}
//
//
// {{}{}} flip mid 2 (2,3)
// {{}}{} flip right (2,4)
// {}{{}} flip left (1,3)
// {}{}{}    flip wings (1,4)
//
// 1 + 2^2
//
// LLLLRRRR
// LLLRLRRR (3,4)
// LLLRRLRR (3,5)
// LLLRRRLR (3,6)
//
// LLRLLRRR (2,4)
// LLRLRLRR (2,5)
// LLRLRRLR (2,6)
//
// LRLLLRRR (1,4)
// LRLLRLRR (1,5)
// LRLLRRLR (1,6)
//
// LRLRLRLR
//
//
//
//
// 1. LLLRRR
// 2. LLRLRR
//    LRLLRR
//
// 3. LLRRLR
// 4. LRLRLR
//
// 1. LLLRRR
// 2. LLRLRRx
// 3. LLRRLR
// 4. LRLRLRx
//
//
//
// LR
//
// LLRR
// LRLR
//
//
// LLLRRR =>
//
// LLRLRR => LLRRLR => LRLRLR
//
// LRLLRR =>
//
//
//
// 112233 LRLRLR
// 121233 LLRRLR
// 122133 LLRRLR
// 122313 LLRLRL
// 122331 LLRLRR
//
// LLLRRR
// LLRLRR
// LRLLRR
//
// LLLRRR
// LLRLRR
