const btn_gen = document.getElementById("btn_generator");
const lotto_gen = document.getElementById("id_lotto_gen");
const history = document.getElementById("history");

btn_gen.onclick = addHistory;

createElementLotto(lotto_gen, genLottoNumber());

function addHistory(){
    let numbers = genLottoNumber();
    var lotto = document.createElement("div");
    lotto.classList.add("lotto_gen");

    createElementLotto(lotto_gen, numbers);

    createElementLotto(lotto, numbers);
    history.appendChild(lotto);
}

function createElementLotto(_parent, numbers){
    _parent.textContent = '';

    for(let i = 0 ; i < numbers.length ; i++){
        let num = document.createElement("div");
        num.classList.add("ball");
        num.classList.add(setBallColor(numbers[i]));

        num.id = i;
        num.innerHTML = numbers[i];
        _parent.appendChild(num);
    }
}

function setBallColor(number){
    if(number <= 10)
        return "yellow";
    else if(number <=20)
        return "blue";
    else if(number <=30)
        return "red";
    else if(number <= 40)
        return "gray";
    else
        return "green";
}

function genLottoNumber(){
    let lotto = [];
    while (lotto.length < 6){
        let num = Math.floor(Math.random() * 45 + 1);
        num = parseInt(num);

        if(lotto.length != 0 && lotto.includes(num)){
            continue;
        }
        lotto.push(num);
    }
    lotto.sort(function(a, b) { return a - b});
    return lotto;
}