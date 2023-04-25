const HomePage = require('./../page/HomePage.js')
const UserGridPage = require('./../page/UserGridPage')
const UserEditPage = require('./../page/UserEditPage')

const homePage = new HomePage()
const userGridPage = new UserGridPage()
const userEditPage = new UserEditPage() 

Feature('user')

//Scenario('TC01 - Create a new user', async ({ I }) => {
//     I.amOnPage('https://agapito-server.herokuapp.com/')
//     I.click('#users')
//     I.
//     I.click('#btn-new')
//     I.fillField('#user_login', 'teste')
//     I.fillField('#user_full_name', 'full name teste')
//     I.fillField('#user_email', 'teste@teste.com')
//     I.fillField('#user_age', '28')
//     I.click('#btn-save')
//     I.see('Usuário foi criado com sucesso.')
//     I.waitForElement('#codigo')
//     let value = await I.grabHTMLFrom('#codigo')
//     console.log(value)
// })

Scenario('TC02 - Create a new user with page', async ({ I }) => {
    homePage.openSite()
    homePage.clickUser()
    userGridPage.clickNewUser()
    userEditPage.fillLogin('teste')
    userEditPage.fillFullName('full name teste')
    userEditPage.fillEmail('teste@gmail.com')
    userEditPage.fillAge('30')
    userEditPage.clickSave()
    I.see('Usuário foi criado com sucesso.')
    I.pause()
    I.saveScreenshot("TestingOK.png") 


})
