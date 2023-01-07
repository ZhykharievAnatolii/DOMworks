// методы для поиска DOM-елементов

const listItem=document.querySelector(' ');

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

const newItem=document.createElement('li');
newItem.innerHTML=`
<span>Logo</span>
<figure><img src="" alt="">
<figcaption>
Caption
</figcaption>
</figure>
`;
listItem.parentElement.append(newItem);
listItem.replaceWith(newItem);
newItem.parentElement.append(listItem);

// about events


