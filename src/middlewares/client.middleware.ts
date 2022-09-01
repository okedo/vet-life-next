import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

import * as path from 'path';

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  constructor() {}
  async use(req: Request, res: Response, next: () => void) {
    if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
      const file = this.getAssetPath(req.path);
      res.sendFile(file, (err) => {
        if (err) {
          res.status(500).end();
        }
      });
    } else {
      return next();
    }
  }

  getAssetPath(url: any) {
    const basePath = process.env.WEBAPP_BUILD_PATH || './dist/webapp';
    const newUrl = url.replace('vet-react/', '');

    return path.resolve(path.join(basePath, newUrl));
  }
}
