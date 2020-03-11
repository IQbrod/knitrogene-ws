import { Injectable } from "@nestjs/common";
import { MaterialDto } from "../dto/create-material.dto";
import { MaterialEntity } from "../entity/material.entity";

@Injectable()
export class MaterialMapper {
    
    map(createMaterialDto: MaterialDto): MaterialEntity {
        let newMaterial: MaterialEntity = new MaterialEntity();
        newMaterial.name = createMaterialDto.name;
        return newMaterial;
    }

}