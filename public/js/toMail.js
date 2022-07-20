const $toMail = document.querySelector('#card')
function inCard() {
    let dataCard = document.querySelectorAll('.td1')
    let dataCardCount = document.querySelectorAll('.td2')

    dataArr1 = []
    dataArr2 = []

    dataCard.forEach(element => {
        dataArr1.push(element.textContent)
    });

    dataCardCount.forEach(element => {
        dataArr2.push(element.textContent)
    });

    textArea = document.getElementById('message')
    if (textArea) {
        let text = ''
        for(let i = 0; i < dataArr1.length; i++) {
            text += dataArr1[i] + ": " + dataArr2[i] + ";\n"
        }
        if (document.querySelector('.price')) {
            text += "\n" + document.querySelector('.price').textContent
            textArea.textContent = text
        }    
    }
}
if ($toMail) {
    inCard()
}