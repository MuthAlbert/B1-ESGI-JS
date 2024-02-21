function addbasket (newfruit) {
    basket.push(newfruit);
    document.getElementById("tab_id").innerHTML = basket.join("\n");
    const result = basket.join("\n");
    console.log(result)
    
    // const a = 'Pomme';
    // a = document.getElementById("a");
    // let count = 0;
    // for (let i in basket) {
    //     if (a === basket[i++])
    //         count++;
    // }
    // console.log(count);
    // count.innerText = Number(a);
    // const result = basket.join("\n");
}

const basket = [];
