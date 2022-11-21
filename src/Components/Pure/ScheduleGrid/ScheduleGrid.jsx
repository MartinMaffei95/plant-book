import { AiFillSetting } from 'react-icons/ai';
import { formatingDate } from '../../../utils/formatingDate';
import { isToday } from '../../../utils/isToday';

const ScheduleGrid = ({ scheduleArray }) => {
  return (
    <div className="grid grid-cols-4 auto-rows-auto text-sm text-mainColor-300  scheduleTab pl-2 pr-2">
      <div className="col-start-1 col-end-5  tableHead">
        Cronograma <AiFillSetting />
      </div>
      <div className="bg-slate-600"> Acción </div>
      <div className="bg-slate-600">Cada (dias)</div>
      <div className="bg-slate-600"> Proxima aplicación</div>
      <div className="bg-slate-600">Realizado hoy?</div>
      {!scheduleArray
        ? null
        : scheduleArray?.map((row) =>
            !row?.schedule?.init_date ? (
              <>
                <div className="bg-slate-600 col-start-1 col-end-2">
                  {row?.name}
                </div>
                <div className="bg-slate-600 col-start-2 col-end-5">
                  Quieres inciar esta accion?
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-600">{row?.name}</div>
                <div className="bg-slate-600">{row?.schedule?.step_repeat}</div>
                <div className="bg-slate-600">
                  {formatingDate(row?.schedule?.next_event)}
                </div>
                <div className="bg-slate-600">
                  {isToday(row?.itsDoneToday) ? 'SI' : 'NO'}
                </div>
              </>
            )
          )}
    </div>
  );
};

export default ScheduleGrid;
