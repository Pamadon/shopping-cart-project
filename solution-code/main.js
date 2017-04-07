var juice = document.getElementById('juice')
juice.addEventListener('click', function(event) {
    document.getElementById('inner-flex1').classList.add('none2')
    document.getElementById('inner-flex3').classList.add('none2')
    document.getElementById('inner-flex2').classList.remove('none2')
})

var cereal = document.getElementById('cereal')
cereal.addEventListener('click', function(event) {
    document.getElementById('inner-flex2').classList.add('none2')
    document.getElementById('inner-flex3').classList.add('none2')
    document.getElementById('inner-flex1').classList.remove('none2')
})


var candy = document.getElementById('candy')
candy.addEventListener('click', function(event) {
    document.getElementById('inner-flex2').classList.add('none2')
    document.getElementById('inner-flex1').classList.add('none2')
    document.getElementById('inner-flex3').classList.remove('none2')
})
