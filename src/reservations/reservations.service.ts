import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
  async create(createReservationDto: CreateReservationDto) {
    const dataReserva = new Reservation();
    (dataReserva.user_id = createReservationDto.user_id),
      (dataReserva.service_id = createReservationDto.service_id);

    Reservation.save(dataReserva);
    const listData = await Reservation.find();
    const newData = listData[listData.length - 1];
    return newData;
  }

  findAll() {
    return Reservation.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
