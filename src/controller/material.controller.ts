import { Get, Controller, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';

import { MaterialEntity } from '../entity/material.entity';
import { MaterialService } from '../service/material.service';
import { MaterialDto } from '../dto/material.dto';

import {
    ApiUseTags, ApiBearerAuth, ApiOperation, ApiResponse,
} from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiBearerAuth()
@ApiUseTags('v1/materials')
@Controller('v1/materials')
export class MaterialController {

    constructor(private readonly materialService: MaterialService) {}

    @Get()
    @ApiOperation({ title: 'Get all materials' })
    @ApiResponse({ status: 200, description: 'Return all materials.'})
    async findAll(): Promise<MaterialEntity[]> {
        return this.materialService.findAll();
    }

    @Get(':materialId')
    @ApiOperation({ title: 'Get a material from an id' })
    @ApiResponse({ status: 200, description: 'Returns a material by id'})
    @ApiResponse({ status: 404, description: 'No material found for given id'})
    async findOne(@Param('materialId') materialId: number): Promise<MaterialEntity> {
        let material: MaterialEntity = await this.materialService.findOne(materialId);
        if (!material) {
            throw new HttpException("No material found for given id", HttpStatus.NOT_FOUND);
        } else {
            return material;
        }
    }

    @Post()
    @ApiOperation({ title: 'Create material' })
    @ApiResponse({ status: 201, description: 'The material has been successfully created.'})
    async create(@Body() materialDto: MaterialDto): Promise<MaterialEntity> {
        return this.materialService.create(materialDto);
    }

    @Put(':materialId')
    @ApiOperation({ title: 'Update material' })
    @ApiResponse({ status: 201, description: 'The material has been successfully updated.'})
    async update(@Param('materialId') materialid, @Body() materialData: MaterialDto): Promise<MaterialEntity> {
        return this.materialService.update(materialid, materialData);
    }

    @Delete(':materialId')
    @ApiOperation({title: 'Delete material'})
    @ApiResponse({ status: 201, description: 'The material has been successfully deleted.'})
    async delete(@Param('materialId') materialid: number): Promise<DeleteResult> {
        return this.materialService.delete(materialid);
    }

}