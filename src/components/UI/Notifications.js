import classes from './Notifications.module.css';

const Notifications =(props)=>{

    let specialClasses = '';

    if(props.status === 'error'){
        specialClasses=classes.error;
    }

    if(props.status === 'success'){
        specialClasses = classes.success
    }

    const cssClasses=`${classes.notifications} ${specialClasses}`;
   return(
    <section className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
    </section>
   )
}

export default Notifications;