import { Controller, Post, Get, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';

@Controller('waitlist')
export class WaitlistController {
    constructor(private readonly waitlistService: WaitlistService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async addToWaitlist(@Body('email') email: string) {
        await this.waitlistService.addEmail(email);
        return { success: true };
    }

    @Get('count')
    async getCount() {
        const count = await this.waitlistService.getCount();
        return { count };
    }
}
