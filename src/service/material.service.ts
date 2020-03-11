import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaterialEntity } from '../entity/material.entity';
import { MaterialDto } from '../dto/create-material.dto';
import { MaterialMapper } from '../mapper/material.mapper';

@Injectable()
export class MaterialService {
    constructor(
        @InjectRepository(MaterialEntity)
        private readonly materialRepository: Repository<MaterialEntity>,
        private readonly materialMapper: MaterialMapper
    ) {}

    async findAll(): Promise<MaterialEntity[]> {
        return this.materialRepository.find();
    }

    async findOne(materialId: number): Promise<MaterialEntity> {
        return this.materialRepository.findOne( {id: materialId} );
    }

    async create(materialDto: MaterialDto): Promise<MaterialEntity> {
        return this.materialRepository.save(this.materialMapper.map(materialDto));
    }

}
