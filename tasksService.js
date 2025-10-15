const tasks = []

export const addTask = async (task) => {
    return tasks.push(task)
}

export const getTasks = async () => {
    return tasks
}

export const getTask = async (taskId) => {
    return tasks.find(taskEntry.id === taskId)
}

export const deleteTask = async (taskId) => {
    const taskIndex = tasks.findIndex(taskEntry.id === taskId)

    return [...tasks.slice(0, taskIndex), tasks.slice(taskIndex+1)]
}
