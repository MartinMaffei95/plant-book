import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { formatingDate } from '../../../../utils/formatingDate';
import {
  dayOfWeek,
  isLastWeek,
  nWeekOfMounth,
  WeekOfMounth,
} from '../../../../utils/isLastWeek';
import { stringify } from '../../../../utils/jsonFunc';

const PersonalizedSchedule = ({ valueName, setFieldValue }) => {
  const [daysSelected, setDaysSelected] = useState([]);

  const [mySchedule, setMySchedule] = useState({
    name: 'PERSONALIZED',
    // id: 'PERSONALIZED',
    init_date: moment(),
    step_repeat: 1,
    step_format: 'DAY',
    days_to_repeat: daysSelected || null,
    next_event: '',
    final_date: null,
    notificate: false,
    extra_data: null,
    end_date: moment().add(1, 'M'),
    end_format: null,
    repeats: 0,
    repeats_to_end: 1,
    month_data: {
      day: null,
      handler: null,
    },
    end_handler: null,
  });
  const handleChange_initDate = (e) => {
    setMySchedule({ ...mySchedule, init_date: moment(e) });
  };
  const handleChange_endDate = (e) => {
    setMySchedule({ ...mySchedule, end_date: moment(e) });
  };

  const handleChange_days_to_repeat = (e, newFormats) => {
    setDaysSelected(newFormats);
    setMySchedule({ ...mySchedule, days_to_repeat: newFormats });
  };
  const handleChange_generalInput = (e) => {
    const { name, value } = e.target;
    setMySchedule({ ...mySchedule, [name]: value });
  };
  const handleChange_monthDate = (e) => {
    const { name, value } = e.target;
    setMySchedule({ ...mySchedule, month_data: value });
  };

  useEffect(() => {
    localStorage.setItem(`temporal_${valueName}`, JSON.stringify(mySchedule));
    console.log(mySchedule?.month_data);
  }, [mySchedule]);

  return (
    <div className="">
      {/* <button
        onClick={() => {
          console.log(mySchedule);
        }}
      >
        CONSOLE
      </button> */}
      <div>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <MobileDatePicker
            label="Fecha de inicio"
            inputFormat="MM/DD/YYYY"
            value={mySchedule?.init_date}
            onChange={handleChange_initDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div>
        Se repite cada
        <TextField
          id="filled-number"
          type="number"
          name={'step_repeat'}
          value={mySchedule?.step_repeat}
          onChange={handleChange_generalInput}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 1 } }}
          variant="outlined"
        />
        <FormControl className="overflow-visible">
          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            value={mySchedule?.step_format}
            name={'step_format'}
            onChange={handleChange_generalInput}
          >
            <MenuItem key={'DAY'} value={'DAY'}>
              {mySchedule?.step_repeat <= 1 ? 'día' : 'días'}
            </MenuItem>
            <MenuItem key={'WEEK'} value={'WEEK'}>
              {mySchedule?.step_repeat <= 1 ? 'semana' : 'semanas'}
            </MenuItem>
            <MenuItem key={'MONTH'} value={'MONTH'}>
              {mySchedule?.step_repeat <= 1 ? 'mes' : 'meses'}
            </MenuItem>
            <MenuItem key={'YEAR'} value={'YEAR'}>
              {mySchedule?.step_repeat <= 1 ? 'año' : 'años'}
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* EN EL CASO DE SEMANAS - PERMITE SELECCIONAR LOS DIAS - */}
      {mySchedule?.step_format === 'WEEK' ? (
        <ToggleButtonGroup
          value={mySchedule?.days_to_repeat}
          onChange={handleChange_days_to_repeat}
        >
          <ToggleButton value="L" aria-label="L">
            L
          </ToggleButton>
          <ToggleButton value="M" aria-label="M">
            M
          </ToggleButton>
          <ToggleButton value="X" aria-label="X">
            X
          </ToggleButton>
          <ToggleButton value="J" aria-label="J">
            J
          </ToggleButton>
          <ToggleButton value="V" aria-label="V">
            V
          </ToggleButton>
          <ToggleButton value="S" aria-label="S">
            S
          </ToggleButton>
          <ToggleButton value="D" aria-label="D">
            D
          </ToggleButton>
        </ToggleButtonGroup>
      ) : /* EN EL CASO DE MESES - EL NUMERO DE DIA CAMBIA DEPENDE DEL VALOR DE "INICIA" - */
      mySchedule?.step_format === 'MONTH' ? (
        <div>
          <FormControl className="overflow-visible">
            <Select
              variant="outlined"
              value={stringify(mySchedule?.month_data)}
              name={'month_data'}
              onChange={handleChange_monthDate}
            >
              <MenuItem
                value={JSON.stringify({
                  day: mySchedule?.init_date.get('date'),
                  handler: 'EVERY',
                })}
              >
                Mensualmente, el {mySchedule?.init_date.get('date')}
              </MenuItem>
              {/* [CUARTO] CAMBIA DEPENEDENIENDO DE LA FECAH SELSECCIONADA LO MISMO QUE [MIERCOLES] */}
              {nWeekOfMounth(mySchedule?.init_date?.day()) <= 4 ? (
                <MenuItem
                  value={JSON.stringify({
                    day: dayOfWeek(mySchedule?.init_date?.day()),
                    handler: WeekOfMounth(mySchedule?.init_date?.date()),
                  })}
                >
                  {WeekOfMounth(mySchedule?.init_date?.date())}{' '}
                  {dayOfWeek(mySchedule?.init_date?.day())} de cada mes
                </MenuItem>
              ) : null}

              {isLastWeek(mySchedule?.init_date) ? (
                <MenuItem
                  value={JSON.stringify({
                    day: dayOfWeek(mySchedule?.init_date?.day()),
                    handler: 'LAST',
                  })}
                >
                  Ultimo {dayOfWeek(mySchedule?.init_date?.day())} de cada mes
                </MenuItem>
              ) : null}
            </Select>
          </FormControl>
        </div>
      ) : null}

      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Finaliza:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="NEVER"
            name="finalDate"
          >
            <FormControlLabel value="NEVER" control={<Radio />} label="Nunca" />
            <FormControlLabel
              value="AFTER_DATE"
              control={<Radio />}
              label={
                <div>
                  El
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <MobileDatePicker
                      inputFormat="DD/MM/YYYY"
                      value={mySchedule?.end_date}
                      onChange={handleChange_endDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              }
            />
            <FormControlLabel
              value="AFTER_STEPS"
              control={<Radio />}
              label={
                <div>
                  "Despues de
                  <TextField
                    id="filled-number"
                    type="number"
                    name={'step_repeat_for_end'}
                    value={mySchedule?.step_repeat_for_end}
                    onChange={handleChange_generalInput}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{ inputProps: { min: 1 } }}
                    variant="outlined"
                  />
                  repeticiones"
                </div>
              }
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default PersonalizedSchedule;
