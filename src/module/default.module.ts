import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DefaultEntity } from "../entity/default.entity";
import { UserModule } from "../user/user.module";
import { DefaultService } from "../service/default.service";
import { DefaultController } from "../controller/default.controller";

@Module({
    imports: [TypeOrmModule.forFeature([DefaultEntity]), UserModule],
    providers: [DefaultService],
    controllers: [
        DefaultController
    ],
    exports: []
})
export class DefaultModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {}
}