const { Builder, By, Key } = require('selenium-webdriver')
// const assert = require('assert')
const should = require('chai').should()

// Bloco describe
describe('ADICIONAR TAREFAS', function () {
    // Bloco IT (individual tarefas)
    it('CT - 01 Tarefa adicionada com sucesso', async function () {

        // ABRIR NAVEGADOR
        let driver = await new Builder().forBrowser('firefox').build()

        // NAVEGAR ATÉ O SITE
        await driver.get('https://herziopinto.github.io/lista-de-tarefas/')

        // LISTAR TAREFA
        await driver.findElement(By.id('inputTask')).sendKeys('Inaugurar Barbearia', Key.RETURN)

        //ASSERT
        let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li/label')).getText().then(function (value) {
            return value
        })

        // assertion node puro 
        // assert.strictEqual(seleniumText, 'Inaugurar Barbearia')

        seleniumText.should.equal('Inaugurar Barbearia')

        // FECHAR NAVEGADOR
        await driver.quit()

    })
    // Bloco IT (individual tarefas)
    it('Tarefa adicionada com sucesso', async function () {

        // ABRIR NAVEGADOR
        let driver = await new Builder().forBrowser('firefox').build()

        // NAVEGAR ATÉ O SITE
        await driver.get('https://herziopinto.github.io/lista-de-tarefas/')

        // LISTAR TAREFA
        await driver.findElement(By.id('inputTask')).sendKeys('Conseguir primeira vaga de QA', Key.RETURN)

        //ASSERT
        let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li/label')).getText().then(function (value) {
            return value
        })

        // assertion node puro 
        // assert.strictEqual(seleniumText, 'Inaugurar Barbearia')

        seleniumText.should.equal('Conseguir primeira vaga de QA')

        // FECHAR NAVEGADOR
        await driver.quit()

    })

})
