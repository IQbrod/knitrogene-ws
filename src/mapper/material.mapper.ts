import { Injectable } from "@nestjs/common";
import { MaterialDto } from "../dto/material.dto";
import { MaterialEntity } from "../entity/material.entity";

@Injectable()
export class MaterialMapper {
    
    map(materialDto: MaterialDto): MaterialEntity {
        return this.assign(new MaterialEntity(), materialDto)
    }

    assign(provided: MaterialEntity, dto: MaterialDto): MaterialEntity {
        provided.name = dto.name;
        return provided;
    }

}