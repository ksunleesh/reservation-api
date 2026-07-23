import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('reservations')
export class ReservationController {
  @Post('')
  createReservation() {}

  @Get('')
  getAllReservations() {}

  @Get(':id')
  getReservationById() {}

  @Patch(':id')
  updateReservationByID() {}

  @Delete(':id')
  deleteReservationByID() {}
}
