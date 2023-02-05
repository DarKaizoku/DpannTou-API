import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Response } from 'express';
import { EMessageStatus, EStatus } from 'src/constants/enum';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createReservationDto: CreateReservationDto,
    @Request() req,
  ) {
    const dataResa = await this.reservationsService.create(
      createReservationDto,
      req.user.userId,
    );
    switch (dataResa) {
      case 0:
        return {
          status: EStatus.FAIL,
          message: EMessageStatus.Unknown + createReservationDto.service_id,
        };
      case 1:
        return {
          status: EStatus.FAIL,
          message:
            EMessageStatus.checkData + `Vous êtes l'auteur.e du service !?!`,
        };
      case 2:
        return {
          status: EStatus.FAIL,
          message: 'Service déjà réservé : ' + createReservationDto.service_id,
        };
      default:
        dataResa;
        break;
    }
    return dataResa;
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsService.remove(+id);
  }
}
