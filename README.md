# Простой чат
[![E-soft](esoft-logo.svg)](https://esoft.tech/) 

Практическая работа для "Школы программирования - 2021"

---
## Задание:

Реализовать простой чат на nodejs и [socket.io](http://socket.io/) библиотеке.
В работе использовать фремворк [express](https://expressjs.com/ru/starter/installing.html)

Сверстать форму для ввода и отправки сообщения и связать с сервером.
(пример - https://socket.io/get-started/chat)

Пользователь должен сперва ввести свое имя, а потом получить доступ к отправке сообщений.

Оправлять всем подключенным пользователям следующие сообщения:
1. Присоединился пользователь: <Имя пользователя>;
2. Всего присоединилось N пользователей (выводить каждый раз когда присоединяется новый пользователь);
3. Любые сообщения от пользователей должны быть видны всем.

Данные сохранять пока нигде не нужно, в nodejs для хранения текущего количества пользователей можно использовать переменную в глобальной области видимости.

---
## Структура проекта и описание применяемых решений:
### Подходы используемые в решение задачи:
1. Реализована логика получения, хранения и удаления имени пользователя через куки
2. Декомпозиция структуры проекта. Проект разбит на отдельные смысловые единицы (public, views, router.js, messagesHandler.js, middlewares.js), подключение которых происходит в точке входа приложения (app.js)
3. Для стилизации приложения используется установленный через npm bootstrap 5 (bootstrap, bootstrap-icons)
4. Удобная разработка пользовательских интерфейсов реализована с применением шаблонизатора handlebars (express-handlebars)
5. Для автоматической перезагрузке сервера в процессе разработки применен модуль nodemon
6. Работа с куками на стороне сервера осуществляется с приминением модулей: cookie, cookie-parser, а на стороне клиента - js-cookie
7. Проект реализован с использованием фремворка Express и Cosket.io
8. Для подключения иконки сайта применен модуль serve-favicon


### Структура проекта:
файл/папка        | описание
:----------------:|:-----------------------------------------------------------------------------------:
app.js            | Точка входа, исполняемый файл проекта
package.json      | Файл центральный репозиторий настроек проекта node.js
package-lock.json | Файл с описанием всех используемых внешних зависимостей
README.md         | Файл с описанием проекта
.gitignore        | Файл для определения структур проекта, которые не должны поподать в Git-репозиторий
messagesHandler.js| Контроллеры сообщений чата в Cosket.io
middlewares.js    | Промежуточные обработчики маршрутов для проверки и добавления имени пользователя
router.js         | Слой представления маршрутов
public            | Папка представления статических ресурсов
views             | Слой представления шаблонов для отрисовки данных