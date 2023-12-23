// TODO: Function doesn't work. Need to fix it.

function aca() {
    let result = "";
    for (let i = 0; i < document.getElementsByClassName('numbers').length; i++) {
        let number = document.getElementsByClassName('numbers')[i].textContent;
        result += "Hola" + number;
    }
    document.getElementById('aca').textContent = result;
}

aca();