/* eslint-disable no-undef */
describe("Visit To Do App", () => {
  it("Check there is an empty list of todo's", () => {
    cy.visit("/");
    cy.get("#emptyTodos").contains("Empezá a agregar tus tareas tareas...");
  });
});
