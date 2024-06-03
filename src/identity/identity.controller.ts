import { Controller, Post, Body } from '@nestjs/common';
import { IdentityDto } from './dto/identity.dto';
import { IdentityService } from './identity.service';

@Controller('identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post()
  getOrcreateIdendity(@Body() identityDto: IdentityDto) {
    return this.identityService.getOrcreateIdendity(identityDto);
  }
}
