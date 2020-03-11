import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MaterialEntity } from "../entity/material.entity";
import { UserModule } from "../user/user.module";
import { MaterialService } from "../service/material.service";
import { MaterialController } from "../controller/material.controller";
import { MaterialMapper } from "../mapper/material.mapper";

@Module({
    imports: [TypeOrmModule.forFeature([MaterialEntity]), UserModule],
    providers: [MaterialService, MaterialMapper],
    controllers: [
        MaterialController
    ],
    exports: []
})
export class MaterialModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {}
}