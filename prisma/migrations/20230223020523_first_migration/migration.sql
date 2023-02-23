-- CreateTable
CREATE TABLE "quote" (
    "id" TEXT NOT NULL,
    "numericId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "departure" TIMESTAMP(3) NOT NULL,
    "return" TIMESTAMP(3) NOT NULL,
    "people" INTEGER NOT NULL,
    "transportation" TEXT NOT NULL,
    "service" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);
