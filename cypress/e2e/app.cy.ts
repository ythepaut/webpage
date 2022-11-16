describe("Navigation", () => {
    it("should navigate to the legal page", () => {
        cy.visit("/");
        cy.get("a[href*=\"/legal\"]").click();
        cy.url().should("include", "/legal");
        cy.get("a[href=\"/\"]").click();
        cy.url().should("equal", Cypress.config().baseUrl + "/");
    });

    it("should navigate to the privacy policy page", () => {
        cy.visit("/");
        cy.get("a[href*=\"/privacy-policy\"]").click();
        cy.url().should("include", "/privacy-policy");
        cy.get("a[href=\"/\"]").click();
        cy.url().should("equal", Cypress.config().baseUrl + "/");
    });
});

describe("Section scroll", () => {
    it("should scroll to contact section", () => {
        cy.visit("/");
        cy.get("a[href*=\"#contact\"]").click({force: true});
        cy.url().should("include", "#contact");
    });
});

describe("Language switch", () => {
    it("should switch language to english", () => {
        cy.visit("/fr");
        cy.get("a[href*=\"/en\"]").click();
        cy.url().should("include", "/en");
    });

    it("should switch back to french", () => {
        cy.get("a[href=\"/\"]").click();
        cy.url().should("equal", Cypress.config().baseUrl + "/");
    });
});

export {};
