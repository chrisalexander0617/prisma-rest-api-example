import { Module } from '@nestjs/common';
import { ArticlesService } from './service/articles.service';
import { ArticlesController } from './controllers/articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {}