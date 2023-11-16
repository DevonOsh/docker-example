import pg from 'pg';

const pool = new pg.Pool();

export async function getCurrentTime() {
    return await pool.query('SELECT NOW()');
}
export async function getMeals() {
    return await pool.query(
        'SELECT * FROM meal_plans'
    )
}

export async function createMeal(dow, meal, mealName) {
    return await pool.query(
        'INSERT INTO meal_plans (dow, meal, meal_name) VALUES ($1, $2, $3)',
        [ dow, meal, mealName ]
    )
}

export async function deleteMeal(id) {
    return await pool.query(
        'DELETE FROM meal_plans WHERE ID = $1', 
        [id]
    )
}
