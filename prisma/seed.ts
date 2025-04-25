import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import csv from "csvtojson";

async function main() {
  const prisma = new PrismaClient();
  const csvFile = path.resolve(__dirname, "psgc_masterlist.csv");
  if (!fs.existsSync(csvFile)) {
    throw new Error(
      `CSV not found at ${csvFile}. Download the PSGC master list CSV from https://psa.gov.ph/classification/psgc and save as prisma/psgc_masterlist.csv`
    );
  }

  const rows = await csv().fromFile(csvFile);
  console.log(`Seeding ${rows.length} addresses...`);
  for (const r of rows) {
    await prisma.address.upsert({
      where: { psgcCode: r.psgc_code || r.PSGC_CODE },
      update: {},
      create: {
        psgcCode: r.psgc_code || r.PSGC_CODE,
        country: r.country || r.COUNTRY,
        region: r.region || r.REGION,
        province: r.province || r.PROVINCE,
        city: r.city || r.CITY,
        barangay: r.barangay || r.BARANGAY,
      },
    });
  }

  console.log("Address seed complete.");
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
