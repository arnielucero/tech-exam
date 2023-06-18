import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users = [];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = { ...createUserDto, id: Date.now().toString() };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    console.log(updatedUser);
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(userIndex, 1);
    return this.users;
  }
}
