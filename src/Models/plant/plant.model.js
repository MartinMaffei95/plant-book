export class Plant {
  plant_name; // string
  plant_type; // string or null (suculenta, cactus, flor, hortaliza, tuberculo)
  last_harvest; // date or null
  assigned_color; // string or null

  last_watering; // date or null
  last_prune; // date or null
  last_fertilization; // date or null
  last_application_of_insecticide; // date or null
  last_application_of_fungicide; // date or null

  // scheduled actions
  watered_schedule; //object or null
  prune_schedule; //object or null
  fertilization_schedule; //object or null
  insecticide_schedule; //object or null
  fungal_schedule; //object or null

  constructor(plant) {
    this.plant_name = plant.plant_name || ''; // string
    this.id = plant.id; // integer
    this.plant_type = plant.plant_type || null; // string or null (suculenta, cactus, flor, hortaliza, tuberculo)
    this.harvest_date = plant.harvest_date || null; // date or null
    this.planting_date = plant.planting_date || null; // date or null
    this.last_harvest = plant.last_harvest || null; // date or null
    this.assigned_color = plant.assigned_color || null; // string or null

    this.last_watering = plant.last_watering || null; // date or null
    this.last_prune = plant.last_prune || null; // date or null
    this.last_fertilization = plant.last_fertilization || null; // date or null
    this.last_application_of_insecticide =
      plant.last_application_of_insecticide || null; // date or null
    this.last_application_of_fungicide =
      plant.last_application_of_fungicide || null; // date or null

    // scheduled actions
    this.watered_schedule = plant.watered_schedule || null; //object or null
    this.prune_schedule = plant.prune_schedule || null; //object or null
    this.fertilization_schedule = plant.fertilization_schedule || null; //object or null
    this.insecticide_schedule = plant.insecticide_schedule || null; //object or null
    this.fungal_schedule = plant.fungal_schedule || null; //object or null
  }

  // get getAllData() {
  //   return {
  //     plant_name: this.plant_name, // string
  //     plant_id: this.id, // string
  //     plant_type: this.plant_type, // string or null (suculenta, cactus, flor, hortaliza, tuberculo)
  //     last_harvest: this.last_harvest, // date or null
  //     assigned_color: this.assigned_color, // string or null
  //     last_watering: this.last_watering, // date or null
  //     last_prune: this.last_prune, // date or null
  //     last_fertilization: this.last_fertilization, // date or null
  //     last_application_of_insecticide: this.last_application_of_insecticide, // date or null
  //     last_application_of_fungicide: this.last_application_of_fungicide, // date or null

  //     watered_schedule: createSchedule(this.watered_schedule), //object or null <== this value is a string. Use that string for create a schedule obj
  //     prune_schedule: this.prune_schedule, //object or null
  //     fertilization_schedule: this.fertilization_schedule, //object or null
  //     insecticide_schedule: this.insecticide_schedule, //object or null
  //     fungal_schedule: this.fungal_schedule, //object or null
  //   };
  // }
}
