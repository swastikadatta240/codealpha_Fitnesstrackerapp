document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const workoutList = document.getElementById('workout-list');
    const goalInput = document.getElementById('goal');
    const setGoalButton = document.getElementById('set-goal');
    const goalDisplay = document.getElementById('goal-display');

    let workouts = [];
    let fitnessGoal = '';

    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const exercise = document.getElementById('exercise').value;
        const duration = document.getElementById('duration').value;
        const calories = document.getElementById('calories').value;

        const workout = {
            exercise,
            duration,
            calories
        };

        workouts.push(workout);
        displayWorkouts();
        workoutForm.reset();
    });

    setGoalButton.addEventListener('click', () => {
        fitnessGoal = goalInput.value;
        goalDisplay.textContent = `Your Fitness Goal: ${fitnessGoal}`;
        goalInput.value = '';
    });

    function displayWorkouts() {
        workoutList.innerHTML = '';
        workouts.forEach((workout, index) => {
            const li = document.createElement('li');
            li.textContent = `${workout.exercise} - Duration: ${workout.duration} minutes, Calories Burned: ${workout.calories}`;
            workoutList.appendChild(li);
        });
    }
});