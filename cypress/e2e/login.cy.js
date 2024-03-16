describe('Автотесты для формы логина и пароля', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('german@dolnikov.ru'); //найти поле Логин и ввести верный логин
        cy.get('#loginButton').should('be.disabled'); //проверить, что кнопка Войти задизейблена

        cy.get('#pass').type('iLoveqastudio1'); //найти поле Пароль и ввести верный пароль
     	cy.get('#loginButton').should('be.enabled'); //проверить, что кнопка Войти кликабельна

     	cy.get('#loginButton').click(); //кликнуть на кнопку Войти

     	cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
     	cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить, что есть текст и он правильный

     	cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть крестик

		})


it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#forgotEmailButton').click(); //кликнуть на кнопку Забыли пароль

        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //проверить, что есть текст и он правильный
        cy.get('#mailForgot').type('anna@chursina.ru'); //найти поле Логин и ввести любой валидный логин
        cy.get('#restoreEmailButton').contains('Отправить код') //проверить, что есть кнопка Отправить код
        cy.get('#restoreEmailButton').click(); //кликнуть на кнопку Отправить код

        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверить, что текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть крестик

		})

it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('german@dolnikov.ru'); //найти поле Логин и ввести верный логин
        cy.get('#loginButton').should('be.disabled'); //проверить, что кнопка Войти задизейблена

        cy.get('#pass').type('Molly317'); //найти поле Пароль и ввести неверный пароль
     	cy.get('#loginButton').should('be.enabled'); //проверить, что кнопка Войти кликабельна

     	cy.get('#loginButton').click(); //кликнуть на кнопку Войти

     	cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
     	cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить, что есть текст и он правильный
     	cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть крестик

		})

it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('geman@dolnikov.ru'); //найти поле Логин и ввести неверный логин
        cy.get('#loginButton').should('be.disabled'); //проверить, что кнопка Войти задизейблена

        cy.get('#pass').type('iLoveqastudio1'); //найти поле Пароль и ввести верный пароль
     	cy.get('#loginButton').should('be.enabled'); //проверить, что кнопка Войти кликабельна

     	cy.get('#loginButton').click(); //кликнуть на кнопку Войти

     	cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
     	cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить, что есть текст и он правильный
     	
     	cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть крестик

		})


it('Ошибка валидации почты', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('germandolnikov.ru'); //найти поле Логин и ввести логин без @
        cy.get('#loginButton').should('be.disabled'); //проверить, что кнопка Войти задизейблена

        cy.get('#pass').type('iLoveqastudio1'); //найти поле Пароль и ввести верный пароль
     	cy.get('#loginButton').should('be.enabled'); //проверить, что кнопка Войти кликабельна

     	cy.get('#loginButton').click(); //кликнуть на кнопку Войти

     	cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
     	cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверить, что есть текст и он правильный
     	
		})


it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //зайти на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //найти поле Логин и ввести верный логин, но с прописными буквами
        cy.get('#loginButton').should('be.disabled'); //проверить, что кнопка Войти задизейблена

        cy.get('#pass').type('iLoveqastudio1'); //найти поле Пароль и ввести верный пароль
     	cy.get('#loginButton').should('be.enabled'); //проверить, что кнопка Войти кликабельна

     	cy.get('#loginButton').click(); //кликнуть на кнопку Войти

     	cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
     	cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить, что есть текст и он правильный

     	cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть крестик

		})

})
