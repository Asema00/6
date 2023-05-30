// console.log('loading...')
// setTimeout(() => {
//     const product = {
//         name:'Product name',
//         price:'$45'
//     }
//     console.log(product,'1 step')
//     setTimeout(() =>{
//         product.soldOut = true
//         console.log(product,'2 step')
//     },3000)
// },1000)

// console.log('loading...')
// setTimeout(() => {
//     const product = {
//         name: 'Product name',
//         price: '$45'
//     }
//     console.log(product, '1 step')
//     resolve(product)
// },1000)
//
// promise.then((product) =>{
//
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json()
//     .then((data) => {
//         console.log(data)
//     }))


const block = document.querySelector('.block')
const nextBtn = document.querySelector('.next-btn')

let count = 2

nextBtn.onclick = () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3> `
        })
}

//TODO
const prevBtn = document.querySelector('.prev-btn');

prevBtn.onclick = () => {
    if (count > 1) {
        count--;
        fetchData(count);
    }
};

nextBtn.onclick = () => {
    count++;
    fetchData(count);
};

function fetchData(count) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            const { title, id, completed } = data;
            const elements = [
                { tag: 'h2', content: title },
                { tag: 'span', content: id },
                { tag: 'h3', content: completed }
            ];

            block.innerHTML = '';
            elements.forEach(({ tag, content }) => {
                const element = document.createElement(tag);
                element.textContent = content;
                block.appendChild(element);
            });
        });
}




fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));











