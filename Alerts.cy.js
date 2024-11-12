describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    // simple alert
    cy.get('button[onclick="jsAlert()"]').click()  //click on alert button and close automatically
    cy.on('window:alert',(t)=>
      {
      expect(t).to.contains('I am a JS Alert')  // validate the message on alert window
      })
  cy.get('#result').should('have.text',  'You successfully clicked an alert')
  cy.wait(5000)
 
  // when button are present on alert - for ok button
  /*cy.get('button[onclick="jsConfirm()"]').click()  //click on alert button and close automatically
    cy.on('window:confirm',(t)=>
    {
      expect(t).to.contains('I am a JS Confirm')  // validate the message on alert window
    }
  )
  cy.get('#result').should('have.text',  'You clicked: Ok') */

// for cancel button
cy.get('button[onclick="jsConfirm()"]').click()  //click on alert button and close automatically
cy.on('window:confirm',(t)=>
  {
  expect(t).to.contains('I am a JS Confirm')  // validate the message on alert window
  })
cy.on('window:confirm',(t)=> false)
cy.get('#result').should('have.text',  'You clicked: Cancel') 
  })
 
  // for prompt alert
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

cy.window().then((win)=>
{
  cy.stub(win, 'prompt').returns('Hello, welcome to our site')
})
  cy.get('button[onclick="jsPrompt()"]').click()
  cy.wait(5000)

  // to click on cancel button
  //cy.on('window:prompt',(t)=> false)

 cy.get('#result').should('have.text','You entered: Hello, welcome to our site')
}

/* auth alert
approach 1

cy.visit("https://the-internet.herokuapp.com/basic_auth", 
{ auth:
 {
    username:"admin"
    password:"admin"
}
})

approach 2

cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
*/

)}
)
