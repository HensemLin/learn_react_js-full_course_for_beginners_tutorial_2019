const todosData = [
    {
        id: 1,
        name: "Take out the trash",
        completed: true
    },
    {
        id: 2,
        name: "Grocery Shopping",
        completed: false
    },
    {
        id: 3,
        name: "Clean gecko tank",
        completed: false
    },
    {
        id: 4,
        name: "Mow lawn",
        completed: true
    },
    {
        id: 5,
        name: "Catch up on Arrested Development",
        completed: false
    }
]

x = todosData.map((item) => {
    console.log(item)
    if (item.id === 2) {
        item.completed = !item.completed
    }

    return item
})

console.log(x)