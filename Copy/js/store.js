function like(good){
    return ()=>{
        document.getElementById('cart').style.display="block";
        document.getElementById('order').style.display="none";
        document.getElementById('modal').className="show";
        setModal(good);
    }
}
function order(good){
    return ()=>{
        document.getElementById('cart').style.display="none";
        document.getElementById('order').style.display="block";
        document.getElementById('modal').className="show";
        setModal(good);
    }
}

let dir='../img/';
let goods=[{
    img: 'milk.jpg',
    name: 'Jindian Milk',
    price: 500
}]

function addGoods(){
    let store=document.getElementById('store');
    goods.forEach(good=>{
        let div=document.createElement('div');
        div.innerHTML=`<img src="${dir+good.img}"/>
        <div class="caption">
            <div>
                <label>${good.name}</label><br>
                <label>￥${good.price}</label>
            </div>
            <div>
                <button class="cart">Like</button><br>
                <button class="order">Buy</button>
            </div>
        </div>`;
        store.appendChild(div);
        div.querySelector('.cart').onclick=like(good);
        div.querySelector('.order').onclick=order(good);
    })
}

window.addEventListener('load', function(){
    addGoods();
})

