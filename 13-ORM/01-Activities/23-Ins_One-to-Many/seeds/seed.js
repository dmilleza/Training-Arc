const sequelize = require("../config/connection");
const { Driver, License, Car } = require("../models");

const driverSeedData = require("./driverSeedData.json");
const carSeedData = require("./carSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const drivers = await Driver.bulkCreate(driverSeedData);
  console.log(drivers);
  for (const { id } of drivers) {
    const newLicense = await License.create({
      driver_id: id,
    });
  }

  for (const car of carSeedData) {
    console.log(car);
    const newCar = await Car.create({
      ...car,
      // Attach a random driver ID to each car
      driver_id: drivers[Math.floor(Math.random() * drivers.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
