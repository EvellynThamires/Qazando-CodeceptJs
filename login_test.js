Feature('login');

Scenario('Success login',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.click('Login')
    I.waitForText('Login', 30)
    I.fillField('#user', 'e@email.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
}).tag('@success')

Scenario('Trying to log in when typing only the email',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.click('Login')
    I.waitForText('Login', 30)
    I.fillField('#user', 'e@email.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 5)
}).tag('@error')

Scenario('Trying to log in without typing the email and password',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.click('Login')
    I.waitForText('Login', 30)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 5)
}).tag('@error')

Scenario('Trying to log in when typing only the password',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.click('Login')
    I.waitForText('Login', 30)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 10)
}).tag('@error')