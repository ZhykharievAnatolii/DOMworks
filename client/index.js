// методы для поиска DOM-елементов

// const listItem=document.querySelector('header');

// document.querySelectorAll()- мертвая коллекция в ней есть forEach
// document.getElementById()- возвращает один елемент
// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()- возвращают живые коллекции

// listItem.children- коллекция детей
// listItem.firstElementChild- первый
// listItem.lastElementChild- последний ребенок елемента
// listItem.nextElementSibling-
// listItem.previousElementSibling
// listItem.parentElement
// listItem.children[2]

// listItem.id

// const link= listItem.firstElementChild;
// link.href;
//
// link.classList
// link.classList.add('first', 'last');
// link.classList.remove('first');
// // link.classList.toggle('test')=== добавляет класс если не было, уделяет если был
// link.classList.contains('test');
//
// link.getAttribute('test');
// link.setAttributeNode();
// link.removeAttribute();
// // link.hasAttribute();- проверяет наличие
//
//
// link.dataset.action='test';
// link.dataset.action1='test1';
// delete link.dataset.action1
//
// link.closest('.container');
// link.matches('a');

// const newItem=document.createElement('div');
// newItem.innerHTML=`
// <span>Logo</span>
// <figure><img src="" alt="">
// <figcaption>
// Caption
// </figcaption>
// </figure>
// `;
// listItem.parentElement.append(newItem);
// listItem.replaceWith(newItem);
// newItem.parentElement.append(listItem);

// about events

// on....- только одно событие
// addEventListener()- можно добавть сразу несколько обработчиков
// Можно также прописать в теге html

// link.onclick=()=>{
//     console.log('click')
// }
//
// console.log('begin');
//
//
//
// console.log('end');

// Promice- это возможность уйти от коллбека
// Они вводят дополнительную очередь выполнения задач- микротаски
// Для того, чтобы что-то приоритетнее выполнить, обогнать макротаски
// Сам промис не является микрозадачей, он елемент синхронного кода
// В микротаски попадают обработчики зенов и кечей
// Для выполнения должен быть триггер- resolve или reject
// если промис записан просто в коде, то он сразу выполнится, поэтому его заворачиваем в функцию


// console.log('begin');
// setTimeout(()=>{
//     console.log('timeout')
// },0);
// function timer(time){
//     console.log('before promice')
//     return new Promise((resolve, reject)=>{
//         console.log('inside promice before timeout');
//         setTimeout(()=>{
//             console.log('inside promice in timeout');
//             resolve();
//         },time);
//         console.log('inside promice after timeout')
//     })
// };
// timer(1000).then(()=>{
//     console.log('then')
// }).catch(err=>{
//     console.log('cath')
// })
// console.log('end');
// function timer(time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve();
//         },time);
//     })
// };
// timer(1000).then(()=>{
//     console.log('then');
//     Promise.resolve().then(()=>{
//         console.log('inner then')
//     });
//     throw new Error();
// }).catch(err=>{
//     console.log('cath')
// });
// console.log('end');
// timer();

// function resolver() {
//     Promise.resolve().then(()=>{
//         resolver()
//     })
//
// }--- в таком случае перестанут работать обработчики, постоянно по кругу будут микрозадачи попадать в стек



document.addEventListener('DOMContentLoaded',()=>{

    const list=document.querySelector('ul');

    fetch('http://localhost:3030/users')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            const users=Object.entries(data).map(([id,{name}])=>{
            return {
                name,
                id,
            }
            });
            renderItems(users)
        })
        .catch(()=>{
            console.log('error')
        });
    
    function renderItems(users) {
        list.innerHTML='';
        users.forEach(({id,name})=>{
            const listItem=document.createElement('li');

            listItem.innerHTML=`
            ${name}
            <button data-id="${id}">X</button>
            
            `;
            list.append(listItem);
        })
    }

});




