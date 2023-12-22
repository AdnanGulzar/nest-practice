import { Get, Controller, Post } from '@nestjs/common';
import { blogService } from './blog.service';

@Controller('blog')
export class blogController {
  constructor(private readonly blogService: blogService) {}

  @Get()
  getAll() {
    return this.blogService.getAll();
  }

  @Post()
  create() {
    return this.blogService.create();
  }
}
