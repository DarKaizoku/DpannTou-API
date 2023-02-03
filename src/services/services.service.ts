import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const newService = new Service();
    newService.name = createServiceDto.name;
    newService.price = createServiceDto.price;
    newService.city = createServiceDto.city;
    newService.start_time = createServiceDto.start_time;
    newService.end_time = createServiceDto.end_time;
    await Service.save(newService);

    const serviceCreated = await Service.findOneBy({
      name: createServiceDto.name,
    });
    return serviceCreated;
  }

  findAll() {
    return Service.find();
  }

  findOne(id: number) {
    return Service.findBy({ id });
  }

  findOnebyName(name: string) {
    return Service.findOneBy({ name: name });
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
