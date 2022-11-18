export class Schedule {
  // name = ''; //string
  // type = ''; //type of rutine (watering, fertilization, insecticide, fungicide,pruning)

  // init_date = null; //Date
  // step_repeat = null; // number or null
  // next_event = null; // number or null
  // final_date = null; //Date or null
  // notificate = false; // Bool. if is true send notification to user
  // extra_data = null; //string or null. Used for user to put more data to reminder

  constructor(config) {
    this.name = config.name || '';
    this.init_date = config.init_date || null;
    this.step_repeat = config.step_repeat || null;
    this.next_event = config.next_event || null;
    this.final_date = config.final_date || null;
    this.notificate = config.notificate || null;
    this.extra_data = config.extra_data || null;
  }
}
