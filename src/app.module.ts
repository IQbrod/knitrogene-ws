import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { DefaultModule } from './module/default.module';
import { MaterialModule } from './module/material.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        MaterialModule,
        DefaultModule
    ],
    controllers: [],
    providers: []
})
export class ApplicationModule {
    constructor(private readonly connection: Connection) {}
}
