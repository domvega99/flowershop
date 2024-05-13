import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';
<<<<<<< HEAD
import { TeamsModule } from './football/teams/teams.module';
=======
import { PagesModule } from './pages/pages.module';
import { UploadModule } from './upload/upload.module';
>>>>>>> 8e665ca761c395d6c30cb95b42ddefde79a10c46

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'flower_shop_root',
      password: 'R!qx4453w',
      database: 'flower_shop_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Only for development. Should be false in production.
    }),
    ProductsModule,
    EmployeesModule,
<<<<<<< HEAD
    TeamsModule,
=======
    PagesModule,
    UploadModule,
>>>>>>> 8e665ca761c395d6c30cb95b42ddefde79a10c46
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
