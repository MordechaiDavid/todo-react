function TodoRowItem(props){
    return(
        <tr>
            <th scope="row">{props.num}</th>
            <td>{props.description}</td>
            <td>{props.assigned}</td>
            <button
                className={'btn btn-primary'}
                onClick={()=> props.deleteTodo(props.num)}>Delete todo</button>
        </tr>
    )
}


export default TodoRowItem;