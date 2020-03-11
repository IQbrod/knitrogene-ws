import { Get, Controller, Param, Post, Body } from '@nestjs/common';

import { MaterialEntity } from '../entity/material.entity';
import { MaterialService } from '../service/material.service';
import { MaterialDto } from '../dto/create-material.dto';

import {
    ApiUseTags, ApiBearerAuth, ApiOperation, ApiResponse,
} from '@nestjs/swagger';

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
    @ApiResponse({ status: 200, description: 'Return a material by id'})
    async findOne(@Param('materialId') materialId: number): Promise<MaterialEntity> {
        return this.materialService.findOne(materialId);
    }

    @Post()
    @ApiOperation({ title: 'Create material' })
    @ApiResponse({ status: 201, description: 'The material has been successfully created.'})
    async create(@Body() materialDto: MaterialDto): Promise<MaterialEntity> {
        return this.materialService.create(materialDto);
    }

}