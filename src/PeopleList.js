//this example for rendering lists

const people = [
    {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician'
    },
    {
        id: 1,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist'
    },
    {
        id: 2,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
    }
]


const ListItems = people.map(person=>
    <li key={person.id}>{person.name}</li>
)

function PeopleList(){
    return(
        <ul>{ListItems}</ul>
    )
}

export default PeopleList;