function buy(){
    document.getElementById('modal').className="show";
}
function redirect(target){
    return ()=>{
        window.location.href=target;
    }
}
function increase(event){
    let input=event.target.previousElementSibling;
    input.value=Number(input.value)+1;
    updateTotal(input.value);
}
function decrease(event){
    let input=event.target.nextElementSibling;
    input.value=input.value>0?input.value-1:0;
    updateTotal(input.value);
}
function updateTotal(amount){
    let total = document.getElementById('total');
    total.innerText='￥'+document.querySelector('.price').innerHTML.slice(1)*amount;
}
function setModal(good){
    document.querySelectorAll('h2').forEach(ele=>{
        ele.innerText=good.name;
    });
    document.getElementById('time').innerText=new Date().toLocaleString();
    document.querySelectorAll('.price').forEach(ele=>{
        ele.innerText='￥'+good.price;
    });
}
window.addEventListener('load', function(){
    document.querySelectorAll('.round:first-child').forEach(ele=>{
        ele.onclick=decrease;
    })
    document.querySelectorAll('.round:last-child').forEach(ele=>{
        ele.onclick=increase;
    })
    document.querySelector('.user .cart').onclick = redirect('cart.html');
    document.querySelector('.user .order').onclick = redirect('order.html');
    document.querySelectorAll('a').forEach(ele=>{
        ele.onclick=function(event){
            event.preventDefault();
            document.getElementById('modal').className="hide";
        }
    })
    document.querySelectorAll('input').forEach(ele=>{
        ele.oninput=function(event){
            event.target.value=event.target.value.replace(/[^\d]/g,'');
            updateTotal(event.target.value);
        }
    })
    document.querySelector('h1').onclick=redirect('store.html');
    let buyButton=document.querySelector('.buy');
    if(buyButton)
        buyButton.onclick=buy;
})