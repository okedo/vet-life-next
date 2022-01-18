import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { map } from 'rxjs';
import { Page } from 'src/shared/decorators/page.decorator';

@Controller('articles')
export class ArticlesController {
  constructor(private httpService: HttpService) {}
  @Get()
  @Page('articles')
  public getList(): any {
    return this.httpService
      .get('https://all-auth-server.herokuapp.com/article/articles')
      .pipe(
        map((res) => {
          return {
            articleList: res.data,
            pageTitle: 'Цікаві Статті',
          };
        }),
      );
  }
}
