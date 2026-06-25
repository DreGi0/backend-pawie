import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WaitlistEntry } from './waitlist.entity';

@Injectable()
export class WaitlistService {
    constructor(
        @InjectRepository(WaitlistEntry)
        private readonly repo: Repository<WaitlistEntry>,
    ) {}

    async addEmail(email: string): Promise<void> {
        await this.repo
        .createQueryBuilder()
        .insert()
        .into(WaitlistEntry)
        .values({ email })
        .orIgnore()
        .execute();
    }

    async getCount(): Promise<number> {
        return this.repo.count();
    }
}
