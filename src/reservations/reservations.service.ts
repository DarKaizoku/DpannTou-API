import { Injectable } from '@nestjs/common';
import { Service } from 'src/services/entities/service.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
  async create(
    createReservationDto: CreateReservationDto,
    user_id: number,
  ): Promise<Reservation | number> {
    const dataCheck = await Service.findOneBy({
      id: createReservationDto.service_id,
    });
    if (!dataCheck) {
      return 0;
    }

    if (dataCheck.user_id['id'] === user_id) {
      console.log('test ko');

      return 1;
    }
    if (dataCheck.reserved) {
      return 2;
    }

    const dataReserva = new Reservation();
    (dataReserva.user_id = user_id),
      (dataReserva.service_id = createReservationDto.service_id);

    await Reservation.save(dataReserva);

    const id = createReservationDto.service_id;
    const reserved = { reserved: true };
    await Service.update(id, reserved);

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
