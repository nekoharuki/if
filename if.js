const button=document.querySelector('#put');

const ifsend=()=>{
    const age=document.querySelector('#age');
    const x=parseInt(age.value);
    

    if(x>=60){
        alert('シニア割りでお酒の値段は200円です');
    }
    
    else if(x>=20){
        alert('お酒の値段は300円です');
    }
    else {
        alert('20歳未満はお酒は購入できません');
    }
    
}
button.addEventListener('click',ifsend);