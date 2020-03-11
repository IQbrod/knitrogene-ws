import { Module } from '@nestjs/common';
import { ArticleModule } from './tutorial/article/article.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './tutorial/profile/profile.module';
import { TagModule } from './tutorial/tag/tag.module';
import { DefaultModule } from './module/default.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        ArticleModule,
        UserModule,
        ProfileModule,
        TagModule,
        DefaultModule
    ],
    controllers: [],
    providers: []
})
export class ApplicationModule {
    constructor(private readonly connection: Connection) {}
}
