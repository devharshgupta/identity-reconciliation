import { Injectable } from '@nestjs/common';
import { IdentityDto } from './dto/identity.dto';

@Injectable()
export class IdentityService {
  getOrcreateIdendity(identityDto: IdentityDto) {
    return 'This action adds a new identity';
  }
}
