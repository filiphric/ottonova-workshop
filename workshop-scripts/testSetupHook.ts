
import * as singleBoardTwoListsFiveCards from './fixtures/singleBoardTwoListsFiveCards.json'
import * as singleBoardSingleListSingleCard from './fixtures/singleBoardSingleListSingleCard.json'
import * as threeBoards from './fixtures/threeBoards.json'
import * as empty from './fixtures/empty.json'
import * as singleBoardsingleList from './fixtures/singleBoardsingleList.json'
import * as singleBoardsingleList2 from './fixtures/singleBoardsingleList2.json'

const beforeTestSeeds = {
  'cypress/e2e/01_api_testing/02_chaining_requests/demo_start.cy.ts': empty,
  'cypress/e2e/01_api_testing/02_chaining_requests/demo_end.cy.ts': empty,
  'cypress/e2e/01_api_testing/02_chaining_requests/challenge_solution.cy.ts': empty,
}

const beforeEachTestSeeds = {
  'cypress/e2e/01_api_testing/01_basics/demo_end.cy.ts': threeBoards,
  'cypress/e2e/01_api_testing/01_basics/demo_start.cy.ts': threeBoards,
  'cypress/e2e/01_api_testing/01_basics/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_api_testing/01_basics/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_api_testing/03_complex_responses/demo_end.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/demo_start.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/challenge.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/challenge_solution.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/04_json_schemas/demo_end.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/02_typescript_basics/01_getting_started/demo_start.cy.js': empty,
  'cypress/e2e/02_typescript_basics/01_getting_started/demo_start.cy.ts': empty,
  'cypress/e2e/02_typescript_basics/01_getting_started/demo_end.cy.ts': empty,
  'cypress/e2e/02_typescript_basics/01_getting_started/challenge.cy.ts': singleBoardsingleList,
  'cypress/e2e/02_typescript_basics/01_getting_started/challenge.cy.js': singleBoardsingleList,
  'cypress/e2e/02_typescript_basics/01_getting_started/challenge_solution.cy.js': singleBoardsingleList,
  'cypress/e2e/02_typescript_basics/01_getting_started/challenge_solution.cy.ts': singleBoardsingleList,
  'cypress/e2e/02_typescript_basics/02_writing_tests/demo_end.cy.ts': singleBoardsingleList2,
  'cypress/e2e/02_typescript_basics/02_writing_tests/challenge.cy.ts': singleBoardsingleList2,
  'cypress/e2e/02_typescript_basics/02_writing_tests/challenge_solution.cy.ts': singleBoardsingleList2,
  'cypress/e2e/02_typescript_basics/03_custom_commands/demo_start.cy.ts': singleBoardsingleList,
  'cypress/e2e/02_typescript_basics/03_custom_commands/demo_end.cy.ts': singleBoardsingleList
}

// @ts-ignore
const testPath = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

before(() => {

  const dbState = beforeTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})