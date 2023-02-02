import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ReservationsModule } from './reservations/reservations.module';
import { ServicesController } from './services/services.controller';
import { ServicesService } from './services/services.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: true,
      entities: ['dist/**/*.entity{ .ts,.js}'],
    }),
    AuthModule,
    ReservationsModule,
    UsersModule,
    ServicesModule,
  ],
  controllers: [AppController, ServicesController],
  providers: [AppService, ServicesService],
})
export class AppModule {}
