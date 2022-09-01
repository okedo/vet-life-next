import { Controller, Post, Req } from '@nestjs/common';

@Controller('api/auth/login')
export class AuthController {
    @Post()
    public login(@Req() request: any): any {
        return { success: true };
    }
}
