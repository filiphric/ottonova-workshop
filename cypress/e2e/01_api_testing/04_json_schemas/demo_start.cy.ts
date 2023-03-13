import boardSchema from '@fixtures/boardSchema.json'

it('GET /api/board/1', () => {

  cy.api({
    url: `/api/boards/1`
  })
    .then(board => {

      expect(board.body).jsonSchema(boardSchema)
      expect(board.body.id).to.exist

    })

})