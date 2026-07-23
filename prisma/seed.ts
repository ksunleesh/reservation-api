import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/database/generated/prisma/client';
import {
  PaymentUncheckedCreateInput,
  ReservationUncheckedCreateInput,
  UserCreateInput
} from '../src/database/generated/prisma/models';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const userData: UserCreateInput[] = [
  {
    name: 'staffa',
    email: 'staffa@mail.com',
    password: 'a12345678',
    role: 'STAFF',
    isActive: true
  },
  {
    name: 'staffb',
    email: 'staffb@mail.com',
    password: 'a12345678',
    role: 'STAFF',
    isActive: true
  },
  {
    name: 'staffc',
    email: 'staffc@mail.com',
    password: 'a12345678',
    role: 'STAFF',
    isActive: false
  },
  {
    name: 'admina',
    email: 'admina@mail.com',
    password: 'a12345678',
    role: 'ADMIN',
    isActive: true
  },
  {
    name: 'adminb',
    email: 'adminb@mail.com',
    password: 'a12345678',
    role: 'ADMIN',
    isActive: true
  },
  {
    name: 'adminc',
    email: 'adminc@mail.com',
    password: 'a12345678',
    role: 'ADMIN',
    isActive: false
  }
];

const ReservationData: ReservationUncheckedCreateInput[] = [
  {
    customerName: 'customera',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 5,
    serviceName: 'THAI',
    reservationStatus: 'PENDING',
    customerPhone: '0991231234',
    createdBy: 1
  },
  {
    customerName: 'customerb',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 10,
    serviceName: 'THAI',
    reservationStatus: 'CONFIRMED',
    customerPhone: '0991231234',
    createdBy: 1
  },
  {
    customerName: 'customerc',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 15,
    serviceName: 'THAI',
    reservationStatus: 'ARRIVED',
    customerPhone: '0991231234',
    createdBy: 1
  },
  {
    customerName: 'customerd',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 20,
    serviceName: 'THAI',
    reservationStatus: 'COMPLETE',
    customerPhone: '0991231234',
    createdBy: 1
  },
  {
    customerName: 'customera',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 5,
    serviceName: 'THAI',
    reservationStatus: 'PENDING',
    customerPhone: '0991231234',
    createdBy: 2
  },
  {
    customerName: 'customerb',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 10,
    serviceName: 'THAI',
    reservationStatus: 'CONFIRMED',
    customerPhone: '0991231234',
    createdBy: 2
  },
  {
    customerName: 'customerc',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 15,
    serviceName: 'THAI',
    reservationStatus: 'ARRIVED',
    customerPhone: '0991231234',
    createdBy: 2
  },
  {
    customerName: 'customerd',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 20,
    serviceName: 'THAI',
    reservationStatus: 'COMPLETE',
    customerPhone: '0991231234',
    createdBy: 2
  },
  {
    customerName: 'customera',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 5,
    serviceName: 'FOOT',
    reservationStatus: 'PENDING',
    customerPhone: '0991231234',
    createdBy: 4
  },
  {
    customerName: 'customerb',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 10,
    serviceName: 'FOOT',
    reservationStatus: 'CONFIRMED',
    customerPhone: '0991231234',
    createdBy: 4
  },
  {
    customerName: 'customerc',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 15,
    serviceName: 'FOOT',
    reservationStatus: 'ARRIVED',
    customerPhone: '0991231234',
    createdBy: 4
  },
  {
    customerName: 'customerd',
    reservationTime: '2026-08-25T14:30:00Z',
    reservationSize: 20,
    serviceName: 'FOOT',
    reservationStatus: 'COMPLETE',
    customerPhone: '0991231234',
    createdBy: 4
  }
];

const PaymentData: PaymentUncheckedCreateInput[] = [
  {
    reservationId: 1,
    createdBy: 1,
    amount: 100
  },
  {
    reservationId: 2,
    createdBy: 2,
    amount: 100
  },
  {
    reservationId: 3,
    createdBy: 3,
    amount: 100
  },
  {
    reservationId: 4,
    createdBy: 4,
    amount: 100
  },
  {
    reservationId: 5,
    createdBy: 1,
    amount: 200
  },
  {
    reservationId: 6,
    createdBy: 1,
    amount: 200
  }
];

async function main() {
  await prisma.payment.deleteMany();
  await prisma.reservation.deleteMany();
  await prisma.user.deleteMany();
  await prisma.user.createMany({ data: userData });
  await prisma.reservation.createMany({ data: ReservationData });
  await prisma.payment.createMany({ data: PaymentData });
}

void main();
