const products = document.querySelectorAll('.card-item');
products.forEach(item =>{
    const plus = item.querySelector('.plus');
    const quantity = item.querySelector('.quantity');
    const minus = item.querySelector('.fa-minus-circle');
    const heart = item.querySelector('.fa-heart');
    const unitPrice = parseInt(item.querySelector('.unit-price').textContent.replace("$",""));
    const total = document.querySelector('.total');
    const delBtn = item.querySelector('.fa-trash-alt');

    heart.addEventListener('click',()=>{
        if(heart.style.color === 'red'){
            heart.style.color = 'black';
        }
        else{
            heart.style.color = 'red';
        }
    })

    const calcTotal = (qty) =>{
        return unitPrice * qty;
    }

    let num = 0;
    num = Number(quantity.textContent);
    const addQuantity = () =>{
        num++;
        quantity.innerHTML = num;
        total.innerHTML = parseInt(total.textContent) + unitPrice;
    }
    plus.addEventListener('click', addQuantity);

    const minusQuantity = () =>{
        if(num > 0){
            num--;
        }
        quantity.innerHTML = num;
        total.innerHTML = parseInt(total.textContent) - unitPrice;
    }
    minus.addEventListener('click',minusQuantity);

    delBtn.addEventListener('click',() =>{
        if (num > 0) {
            let total = document.querySelector('.total');
            total.textContent = parseInt(total.textContent) - (unitPrice * num);
            item.remove();
        }
    })
})