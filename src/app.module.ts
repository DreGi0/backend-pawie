import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaitlistModule } from './waitlist/waitlist.module';
import { WaitlistEntry } from './waitlist/waitlist.entity';

@Module({
    imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [WaitlistEntry],
      synchronize: true,
      ssl: process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    }),
    WaitlistModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
