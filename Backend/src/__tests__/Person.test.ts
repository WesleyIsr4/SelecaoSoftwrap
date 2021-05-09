import request from 'supertest'
import { app } from '../app'
import createConnection from '../database'


describe("person", () => {
  beforeAll( async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  })



it("Should be able to create a new perso", async () => {
   const response = await request(app).post("/api/person").send({
    name: "Person example",
    age: "24 example",
    maritalstatus: "single",
    cpf: "000.000.000-01",
    city: "Person city example",
    state: "Person state example"
  })

  expect(response.status).toBe(201)

})
})

it("Should not be able to create a person with exist cpf", async () => {
  const response = await request(app).post("/api/person").send({
    name: "Person example",
    age: "24 example",
    maritalstatus: "single",
    cpf: "000.000.000-00",
    city: "Person city example",
    state: "Person state example"
  })

  expect(response.status).toBe(400);
})



