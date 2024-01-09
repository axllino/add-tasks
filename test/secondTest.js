const { Builder, By, Key } = require('selenium-webdriver')
const should = require('chai').should()
const chaiAsPromised = require('chai-as-promised');

describe('ADICIONAR TAREFAS', function () {

    it('CT - 02 TAREFAS ADICIONAS OK', async function () {

        // ABRIR NAVEGADOR
        let driver = await new Builder().forBrowser('firefox').build()

        // NAVEGAR ATÉ SITE
        await driver.get('https://herziopinto.github.io/lista-de-tarefas/')


        const tarefas = ['carro', 'moto', 'bicicleta', 'pés', 'mãos', 'sapatos', 'farda', 'roupas', 'toalhas', 'cabelo'];

        // Loop for para realizar 10 envios de teclas
        for (let i = 0; i < 10; i++) {
            let task = `Lavar ${tarefas[i]} - tarefa ${i + 1}`; // Criar uma tarefa diferente para cada iteração
            await driver.findElement(By.id("inputTask")).sendKeys(task, Key.RETURN);
        }

        // Adicionar afirmações usando should
        const taskCount = await driver.findElements(By.xpath('/html/body/div/section/ul/li/label'));

        // Verificar se o número de elementos é igual a 10
        taskCount.should.have.lengthOf(tarefas.length);

        // FECHAR NAVEGADOR
        await driver.quit()

    })

})

