import {useState} from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
const WorkoutForm = () => {
    const {dispatch} = useWorkoutContext()
    const [title, setTitle] = useState('')
    const[load, setLoad] = useState('')
    const[reps, setReps] = useState('')
    const[error, setError] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }else{
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added' ,json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3 style={{margin: "0 0 10px 0"}}>add a new workout</h3>
            
            <div className="r">
                <label>title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div className="r">
                <label>load: </label>
                <input type="number" onChange={(e) => setLoad(e.target.value)} value={load}/>
            </div>
            <div className="r">
                <label>reps: </label>
                <input type="number" onChange={(e) => setReps(e.target.value)} value={reps}/>
            </div>
            
            <button>add workout</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default WorkoutForm