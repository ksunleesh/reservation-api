import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('payments')
export class PaymentController {
  @Post(':id')
  createPayment() {}

  @Get(':id')
  getPaymentById() {}

  @Patch(':id/pay')
  updatePaymentById() {}

  @Delete(':id')
  deletePaymentById() {}
}
