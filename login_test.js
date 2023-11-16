Feature('login');

Scenario('Success login',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
});

Scenario('Trying to log in when typing only the email',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
});

Scenario('Trying to log in without typing the email and password',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
});

Scenario('Trying to log in when typing only the password',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
});