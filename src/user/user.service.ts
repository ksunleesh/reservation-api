import { ConflictException, Injectable } from '@nestjs/common';
import { BcryptService } from '../infrastructure/hash/bcrypt.service';
import { UserCreateInput } from './types/user.type';
import { PrismaClientKnownRequestError } from '../database/generated/prisma/internal/prismaNamespace';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private readonly bcryptService: BcryptService,
    private readonly prisma: PrismaService
  ) {}

  async createUser(input: UserCreateInput): Promise<void> {
    const hash = await this.bcryptService.hash(input.password);

    try {
      await this.prisma.user.create({ data: { ...input, password: hash } });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Email already exist');
        }
      }
      throw error;
    }
  }
}
