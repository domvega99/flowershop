import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
