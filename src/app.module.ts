import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneoModule } from './torneo/torneo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    autoLoadEntities: true,
    synchronize: true,
  }),
    TorneoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
