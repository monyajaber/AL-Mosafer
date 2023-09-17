/// <reference types="cypress"/>


Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("aspire test cases", () => {
  it("randomly enter the website arabic or eng", () => {
    //2 index url index 0 en index1 ar
    let Websites = [
      "https://global.almosafer.com/en",
      "https://global.almosafer.com/ar",
    ];
    //floor بعطيني الرقم انتجر
    //Websites.length 0 or 1 only
    let RandomIndex = Math.floor(Math.random() * Websites.length);
    cy.visit(Websites[RandomIndex]);

    let ArabicCities = ["جدة", "دبي"];
    let ArabicRandomIndex = Math.floor(Math.random()* ArabicCities.length);
    let EnglishCities = ["riyadh", "jeddah","dubai"];
    let EnglishRandomIndex = Math.floor(Math.random()* EnglishCities.length);



    cy.get(".cta__saudi").click();

    cy.get("#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm").click();

     if(RandomIndex ==0){
       cy.get('[data-testid="AutoCompleteInput"]').type(EnglishCities[EnglishRandomIndex])
  }
else
{
  cy.get('[data-testid="AutoCompleteInput"]').type(ArabicCities[ArabicRandomIndex])
    }
  });
});
