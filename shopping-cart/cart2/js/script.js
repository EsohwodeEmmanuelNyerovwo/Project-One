const nodeList = document.querySelectorAll('.card-item');
nodeList.forEach(item =>{
    const plus = item.querySelector('.plus');
    const minus = item.querySelector('.fa-minus-circle');
    let qty = item.querySelector('.quantity');
    let total = document.querySelector('.total');
    const unitPrice = item.querySelector('.unit-price');
    const price = Number(unitPrice.textContent);
    let heart = item.querySelector('.fa-heart');
    console.log(heart);
    
    
    heart.addEventListener('click', () =>{
        if (heart.style.color === 'red') {
            heart.style.color = 'black';
        }
        else{
            heart.style.color = 'red';
        }
    })
    let num = 0;
    plus.addEventListener('click',() =>{
        num = Number(qty.textContent);
        num++;
        qty.innerHTML = num;
        total.textContent = calculatePrice(price,num);
        minus.classList.remove('minusNewColor');
        console.log(calculatePrice(price,num));
        console.log(qty.innerHTML);
    });
    minus.addEventListener('click',() =>{
        num = Number(qty.textContent);
        if (num > 0) {
            num--;
            qty.innerHTML = num;
            total.textContent = subtractPrice();
        }
        else{
            minus.classList.add('minusNewColor');
            console.log(minus);
        }
        console.log(qty.innerHTML);
    })
    const calculatePrice = (up,qt) =>{
        return up *= qt;
    }
    const subtractPrice = () =>{
        return (total.textContent) - price;
    }
});