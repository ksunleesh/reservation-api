import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcrypt';
import { EnvVariable } from '../../config/env.validation';

@Injectable()
export class BcryptService {
  constructor(private readonly config: ConfigService<EnvVariable, true>) {}

  hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.config.get('SALT_ROUNDS'));
  }
}
