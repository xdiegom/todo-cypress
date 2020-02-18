/* eslint-disable no-undef */
describe("Adding ToDo's", () => {
  beforeEach(function() {
    cy.visit("/");
  });

  it("After enter a ToDo, input should be empty", () => {
    cy.get("#addTodoInput").type("Tomar una horchata");
    cy.get("#addTodoBtn").click();

    cy.get("#addTodoInput").should("be.empty");
  });

  it("Add ToDo by hiting enter key", () => {
    cy.get("#addTodoInput").type("Ir al gimnasio{enter}");
  });

  it("Add ToDo by clicking button 'Agregar'", () => {
    cy.get("#addTodoInput").type("Ir al supermercado");
    cy.get("button[type='submit']").click();
  });
});
