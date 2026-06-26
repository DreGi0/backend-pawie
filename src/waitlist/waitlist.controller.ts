import { Controller, Post, Get, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { CreateWaitlistDto } from './waitlist.dto';

@Controller('waitlist')
export class WaitlistController {
    constructor(private readonly waitlistService: WaitlistService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async addToWaitlist(@Body() dto: CreateWaitlistDto) {
        await this.waitlistService.addEmail(dto.email);
        return { success: true };
    }

    @Get('count')
    async getCount() {
        const count = await this.waitlistService.getCount();
        return { count };
    }
}
