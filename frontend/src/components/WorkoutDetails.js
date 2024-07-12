import { useWorkoutContext } from "../hooks/useWorkoutContext"
const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutContext()
    const handleClick = async() => {
        const response = await fetch('/api/workouts/' + workout._id,{
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return(
        <div className="workout-details">
            <h2>{workout.title}</h2>
            <p><strong>Load: </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p style={{fontSize: "10px", marginTop: "8px"}}>Created on {(workout.createdAt).slice(0,10)} at {(workout.createdAt).slice(11,19)}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails