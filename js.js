let input = document.querySelectorAll('input')
let select = document.querySelectorAll('select')
let html = ''
let url = 'https://api.exchangeratesapi.io/latest'
let rates = ''

async function currency(){
    let req = await fetch(url)
    if (req.ok){
        //если ответ положит то переноситься в консол
        let json = await req.json()

        //получаем ключи в консоле
        let arrayKey = Object.keys(json.rates)


        //пробегаясь по каждому элементу , вставляем в кнопку 
        arrayKey.map((item)=>{
            return html += `<option value="${item}">${item}</option>`;
        })


        //добавляем валюту
        select[0].innerHTML = html;
        select[1].innerHTML = html;
        let rates = json.rates

        console.log(json.rates[select[1].value])

        function mini(i,j){
                input[i].value = input[j].value*rates[select[1].value]/rates[select[0].value]
            }
        }
        input[0].addEventListener('keyup', ()=>mini (1,0))
        input[1].addEventListener('keyup', ()=>mini (1,0))
        select[0].addEventListener('keyup', ()=>mini (1,0))
        select[1].addEventListener('keyup', ()=>mini (1,0))


        //величина такая же переносится на 2 инпута
        //занчение из верхнего инпута переносим в нижний учитывая и соотношениеж делим значениями
    }

currency();