// методы для поиска DOM-елементов

const listItem=document.querySelector('header ul a ');

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

listItem.id

const link= listItem.firstElementChild;
link.href;

link.classList
link.classList.add('first', 'last');
link.classList.remove('first')
