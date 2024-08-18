import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Torneo } from './entities/torneo.entity';
import { CreateTorneoDto } from './dto/create-torneo.dto';

@Injectable()
export class TorneoService {
  constructor(
    @InjectRepository(Torneo)
    private torneoRepository: Repository<Torneo>,
  ) {}

  findAll(): Promise<Torneo[]> {
    return this.torneoRepository.find();
  }

  findOne(id: number): Promise<Torneo> {
    return this.torneoRepository.findOneBy({ id });
  }

  create(createTorneoDto: CreateTorneoDto): Promise<Torneo> { // Cambia aquí a CreateTorneoDto
    const torneo = this.torneoRepository.create(createTorneoDto); // Crea una instancia de Torneo
    return this.torneoRepository.save(torneo);
  }

  async remove(id: number): Promise<void> {
    await this.torneoRepository.delete(id);
  }
}
