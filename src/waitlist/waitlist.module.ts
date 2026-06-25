import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaitlistEntry } from './waitlist.entity';
import { WaitlistService } from './waitlist.service';
import { WaitlistController } from './waitlist.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WaitlistEntry])],
  providers: [WaitlistService],
  controllers: [WaitlistController],
})
export class WaitlistModule {}
