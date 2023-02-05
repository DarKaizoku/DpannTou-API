import { Injectable } from '@nestjs/common';
import { Like } from 'typeorm';

import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  async create(
    createServiceDto: CreateServiceDto,
    user_id: number,
  ): Promise<Service> {
    const newService = new Service();
    newService.name = createServiceDto.name;
    newService.price = createServiceDto.price;
    newService.city = createServiceDto.city;
    newService.start_time = createServiceDto.start_time;
    newService.end_time = createServiceDto.end_time;
    newService.user_id = user_id;
    await Service.save(newService);

    const serviceCreated = await Service.findOneBy({
      name: createServiceDto.name,
    });
    return serviceCreated;
  }

  findAll() {
    return Service.findBy({ reserved: false });
  }

  findOne(id: number) {
    return Service.findBy({ id, reserved: false });
  }

  async findbySearch(input: string) {
    const data = await Service.findBy({
      name: Like(`%${input}%`),
      reserved: false,
    });
    return data;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    await Service.update(id, updateServiceDto);

    const dataUpdated = await Service.findBy({ id: id });

    return dataUpdated;
  }

  async remove(id: number) {
    const dataDeleted = await Service.findBy({ id });

    await Service.delete({ id });
    return dataDeleted;
  }
}
