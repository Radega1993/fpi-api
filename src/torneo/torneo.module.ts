import { Module } from '@nestjs/common';
import { TorneoService } from './torneo.service';
import { TorneoController } from './torneo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Torneo } from './entities/torneo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo])],
  controllers: [TorneoController],
  providers: [TorneoService],
})
export class TorneoModule {}
