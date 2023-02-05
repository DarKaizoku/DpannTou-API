import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Request,
  Req,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Service } from './entities/service.entity';
import { EMessageStatus, EStatus } from 'src/constants/enum';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createServiceDto: CreateServiceDto, @Request() req) {
    return this.servicesService.create(createServiceDto, req.user.userId);
  }

  @Get()
  async findAll() {
    return this.servicesService.findAll();
  }

  @Get('search')
  async search(@Body('input') input: string) {
    const data = await this.servicesService.findbySearch(input);
    if (!data[0]) {
      return { message: EMessageStatus.Unknown };
    }
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const data = await this.servicesService.findOne(+id);
    if (!data[0]) {
      return { message: EMessageStatus.Unknown };
    }
    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateServiceDto: UpdateServiceDto,
    @Req() req,
  ) {
    const datacheck = await Service.findOneBy({ id });
    if (!datacheck) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.Unknown + id,
      };
    }
    if (datacheck.user_id['id'] !== req.user.userId) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.forbidden,
      };
    }
    return this.servicesService.update(+id, updateServiceDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', new ParseIntPipe()) id: number, @Req() req) {
    const datacheck = await Service.findOneBy({ id });
    console.log(datacheck);

    if (!datacheck) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.Unknown + id,
      };
    }
    if (datacheck.user_id['id'] !== req.user.userId) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.forbidden,
      };
    }
    return this.servicesService.remove(+id);
  }
}
