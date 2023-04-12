import { Injectable } from '@nestjs/common';
import { PrismaService } from 'database/prisma/prisma.service';

interface GetByCourseAndStudentParams {
  courseId: string;
  studentId: string;
}

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  async getAllEnrollments() {
    return await this.prisma.enrollment.findMany({
      where: {
        canceledAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getEnrollmentsByStudent(studentId: string) {
    return await this.prisma.enrollment.findMany({
      where: {
        studentId,
        canceledAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getByCourseAndStudentId({
    courseId,
    studentId,
  }: GetByCourseAndStudentParams) {
    return await this.prisma.enrollment.findFirst({
      where: {
        courseId,
        studentId,
        canceledAt: null,
      },
    });
  }
}
