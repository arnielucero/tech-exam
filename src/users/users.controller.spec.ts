import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// use jest to mock all actions
describe('UserController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('getAllUsers', () => {
    it('should return an array of users', () => {
      const users = [{ id: '1', name: 'rni', email: 'rni@rni.com' }];
      jest.spyOn(service, 'getAllUsers').mockReturnValue(users);

      expect(controller.getAllUsers()).toBe(users);
    });
  });

  describe('getUserById', () => {
    it('should return a user by ID', () => {
      const user = { id: '1', name: 'rni', email: 'rni@rni.com' };
      jest.spyOn(service, 'getUserById').mockReturnValue(user);

      expect(controller.getUserById('1')).toBe(user); // expect one user
    });
  });

  describe('createUser', () => {
    it('should create a new user', () => {
      const createUserDto = { name: 'rni', email: 'rni@rni.com' };
      const createdUser = { id: expect.any(String), ...createUserDto };
      jest.spyOn(service, 'createUser').mockReturnValue(createdUser); // mocking the result

      expect(controller.createUser(createUserDto)).toBe(createdUser); // should call the controller
    });
  });

  describe('updateUser', () => {
    it('should update a user by ID', () => {
      const updateUserDto = { name: 'alexa' };
      const updatedUser = { id: '1', name: 'rni', email: 'rni@rni.com' };
      jest.spyOn(service, 'updateUser').mockReturnValue(updatedUser);

      expect(controller.updateUser('1', updateUserDto)).toBe(updatedUser);
    });
  });

  describe('deleteUser', () => {
    it('should remove a user by ID', () => {
      const deletedUser = [{ id: '1', name: 'rni', email: 'rni@rni.com' }]; //list of all available data
      jest.spyOn(service, 'deleteUser').mockReturnValue(deletedUser);

      expect(controller.deleteUser('1')).toBe(deletedUser); // expected result in array
    });
  });
});
