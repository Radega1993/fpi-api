import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TorneoService } from './torneo.service';
import { CreateTorneoDto } from './dto/create-torneo.dto'; // Importa el DTO
import { Torneo } from './entities/torneo.entity';

@Controller('torneos')
export class TorneoController {
  constructor(private readonly torneoService: TorneoService) {}

  @Get()
  findAll(): Promise<Torneo[]> {
    return this.torneoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Torneo> {
    return this.torneoService.findOne(id);
  }

  @Post()
  create(@Body() createTorneoDto: CreateTorneoDto): Promise<Torneo> { // Usa el DTO aquí
    return this.torneoService.create(createTorneoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.torneoService.remove(id);
  }
}
