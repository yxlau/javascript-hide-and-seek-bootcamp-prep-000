function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var els = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < els.length; i++){
    els[i].innerHTML = parseInt(els[i].innerHTML) + n
  }
}

function deepestChild(){
  var el = document.querySelectorAll('#grand-node div')
  return el[el.length-1]
}
