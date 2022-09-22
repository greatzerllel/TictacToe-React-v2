const Challengers = ({setChallenger1, setChallenger2}) => { 
    
    return (
        <form
            onSubmit={ev => {
                ev.preventDefault();
                setChallenger1(ev.target.playerOne.value);
                setChallenger2(ev.target.playerTwo.value);
            }}
        >
            <input id='playerOne' type='text' name='playerOne' autoComplete='off'></input>
            <input id='playerTwo' type='text' name='playerTwo' autoComplete='off'></input>
            <button type ='submit'>Empezar</button>
        </form>
    )
}

export default Challengers;