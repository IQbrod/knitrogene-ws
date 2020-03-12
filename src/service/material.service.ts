import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { MaterialEntity } from '../entity/material.entity';
import { MaterialDto } from '../dto/material.dto';
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

    async update(materialId: number, materialDto: MaterialDto): Promise<MaterialEntity> {
        let toUpdate: MaterialEntity = await this.findOne(materialId);
        return this.materialRepository.save(this.materialMapper.assign(toUpdate, materialDto));
    }

    async delete(materialId: number): Promise<DeleteResult> {
        return this.materialRepository.delete({id: materialId});
    }

}
