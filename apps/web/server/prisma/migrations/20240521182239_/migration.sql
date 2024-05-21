-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'PASSED', 'FAILED');

-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('ACTIVE', 'COMPLETED');

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "status" "EnrollmentStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
