import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneosModule } from './torneos/torneos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'club_futbol',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TorneosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
