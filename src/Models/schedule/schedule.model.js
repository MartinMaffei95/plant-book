export class Schedule {
  name = ''; //string
  type = ''; //type of rutine (watering, fertilization, insecticide, fungicide,pruning)

  init_date = ''; //Date
  step_repeat = null; // number or null
  notificate = false; // Bool. if is true send notification to user
  extra_data = ''; //string or null. Used for user to put more data to reminder
}
