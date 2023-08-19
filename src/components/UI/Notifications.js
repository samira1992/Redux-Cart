import classes from './Notifications.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Notifications =(props)=>{

    const dispatch = useDispatch();
   const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 3000); // Display the notification for 3 seconds (3000 milliseconds)

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, dispatch]);

  if (!notification) {
    return null;
  }


    let specialClasses = '';

    if(props.status === 'error'){
        specialClasses=classes.error;
    }

    if(props.status === 'success'){
        specialClasses = classes.success
    }

    const cssClasses=`${classes.notifications} ${specialClasses} ${notification.status}`;
   return(
    <section className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
    </section>
   )
}

export default Notifications;