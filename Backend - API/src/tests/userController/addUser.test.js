const { app } = require("../../index")
const request = require("supertest")
const userController = require("../../controllers/userController")
require('iconv-lite').encodingExists('foo')
const conn = require("../../db/conn")
const User = require("../../models/User")

describe("Create user", ()=>{

    beforeEach(async () => {
      await conn.sync({ force: true });
    });
    
    afterAll(async () => {
      await conn.close();
    });

    test('should return error if name length is less than 3', async () => {
        const user = {
            name: 'te',
            email: 'teste@example.com',
            password: 'password123',
            dataPolicyCheck: true,
          };

        const response = await request(app).post('/user/add').send(user);
        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Nome inválido, nome deve ter entre 3 e 255 caracteres');
    });

    test('should return error if email is invalid', async () => {
      const user = {
        name: 'pessoa teste',
        email: 'pessoa_teste@example',
        password: 'password123',
        dataPolicyCheck: true,
      };
      const response = await request(app).post('/user/add').send(user);
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('E-mail inválido');
    });

    test('should return error if password length is less than 7', async () => {
      const user = {
        name: 'pessoa de teste',
        email: 'pessoa_de_teste@example.com',
        password: 'pass12',
        dataPolicyCheck: true,
      };
      const response = await request(app).post('/user/add').send(user);
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Senha deve ter no mínimo 7 caracteres');
    });

    test('should return error if user is already registered', async () => {
      const existingUser = await User.create({
        name: 'testee',
        email: 'teste_diferente@example.com',
        passwordHash: 'password123',
        dataPolicyCheck: true,
      });

      const user = {
        name: 'testee',
        email: 'teste_email_diferente@example.com',
        password: 'password123',
        dataPolicyCheck: true,
      };
      const response = await request(app).post('/user/add').send(user);
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Usuário já cadastrado');
    });

    test('should return error if email is already registered in another user', async () => {
      const existingUser = await User.create({
        name: 'Pessoa teste diferente',
        email: 'janedoe@example.com',
        passwordHash: 'password123',
        dataPolicyCheck: true,
      });
      const user = {
        name: 'Pessoa de teste diferente',
        email: 'janedoe@example.com',
        password: 'password123',
        dataPolicyCheck: true,
      };
      const response = await request(app).post('/user/add').send(user);
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Email já cadastrado em outro usuário');
    });

    test('should return error if dataPolicyCheck is not provided', async () => {
      const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
      };

      const response = await request(app).post('/user/add').send(user);
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('dataPolicyCheck não fornecido');
    })

    test('should return error if dataPolicyCheck is not provided', async () => {
      const user = {
        name: 'John Doee',
        email: 'johndoee@example.com',
        password: 'password123',
        dataPolicyCheck: 'false'
      };

      const response = await request(app).post('/user/add').send(user);
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('dataPolicyCheck deve ser verdadeiro');
    })
})