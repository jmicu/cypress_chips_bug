// Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;

describe('partitioned cookies', () => {
    it('cannot be read or deleted', () => {        
        cy.setCookie('auth_key', '123key') // Set the 'auth_key' cookie to '123key'
        cy.setCookie('chips', 'cookies having independent partitioned state', { 
            partitioned: true
         })

        cy.getAllCookies().each(cookie => cy.log(cookie))
        
        cy.clearAllCookies() // Clear all cookies
        
        cy.getAllCookies().each(cookie => cy.log(cookie))


    })
  })
  