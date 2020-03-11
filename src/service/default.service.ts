import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DefaultEntity } from '../entity/default.entity';

@Injectable()
export class DefaultService {
    constructor(
        @InjectRepository(DefaultEntity)
        private readonly defaultRepository: Repository<DefaultEntity>
    ) {}

    async findAll(): Promise<DefaultEntity[]> {
      return await this.defaultRepository.find();
    }

}
