import PlantItemOfList from '../../Components/Pure/PlantItemOfList';

//REDUX
import { useSelector } from 'react-redux';

// import addNotification from 'react-push-notification';
import haveWorkToday from '../../utils/haveWorkToday';

const TodayTasks = () => {
  const garden = useSelector((state) => state.garden.plants);
  // const buttonClick = () => {
  //   addNotification({
  //     title: 'Warning',
  //     subtitle: 'This is a subtitle',
  //     message: 'This is a very long message',
  //     theme: 'darkblue',
  //     native: true, // when using native, your OS will handle theming.
  //   });
  // };

  // const [filter, setFilter] = useState('all');

  // 2022-11-19T20:07:19.459Z
  console.log(garden);
  return (
    <>
      <h3>Tareas para hoy: </h3>
      <div className="flex flex-col gap-2 p-2">
        <div>
          Todas
          {garden
            ? garden?.map((p) =>
                haveWorkToday(p) ? (
                  <PlantItemOfList plant={haveWorkToday(p)} />
                ) : (
                  ''
                )
              )
            : // garden?.plants?.map(
              //     (p) =>
              //       (isToday(p?.['watered_schedule']['next_event']) ||
              //         isToday(p?.['watered_schedule']['init_date'])) &&
              //       !isToday(p?.['last_watering']) ? (
              //         <PlantItemOfList plant={p} />
              //       ) : null
              //   )
              'Sin tareas'}
        </div>
        {/* <div>
          Poda
          {garden
            ? garden?.plants?.map((p) => <PlantItemOfList plant={p} />)
            : 'Sin tareas'}
        </div>
        <div>
          Fertilizar
          {garden
            ? garden?.plants?.map((p) => <PlantItemOfList plant={p} />)
            : 'Sin tareas'}
        </div> */}
      </div>
    </>
  );
};

export default TodayTasks;
