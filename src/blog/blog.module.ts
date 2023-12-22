/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { blogController } from './blog.controller';
import { blogService } from './blog.service';
import { Blog } from './entities/blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [blogController],
  providers: [blogService],
})
export class blogModule {}
