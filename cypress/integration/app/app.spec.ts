/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

const devUrl = 'http://localhost:3000/'

describe("App", () => {
    it("Should Have a Snooze Button", () => {
        cy.visit(devUrl)

        cy.get("ion-button.snooze").contains("Snooze")
    })
})

export {}