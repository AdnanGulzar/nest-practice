/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class blogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  async getAll() {
    return await this.blogRepository.find();
  }
  async create() {
    return await this.blogRepository.save({
      title: 'computer',
      description: 'computer is an electronic machine',
    });
  }
}
