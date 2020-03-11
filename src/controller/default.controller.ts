import { Get, Controller } from '@nestjs/common';

import { DefaultEntity } from '../entity/default.entity';
import { DefaultService } from '../service/default.service';

import {
    ApiUseTags, ApiBearerAuth,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('v1/default')
@Controller('v1/default')
export class DefaultController {

    constructor(private readonly defaultService: DefaultService) {}

    @Get()
    async findAll(): Promise<DefaultEntity[]> {
        return await this.defaultService.findAll();
    }

}