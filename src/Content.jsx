const Content = ({items}) => {
    return <div>
        {items.map((listItem) => {
            const {id, name, tasks} = listItem;
            return <article key={id}>
                <div>
                    <h1>{name}</h1>
                    <ul>
                        <li><input type="checkbox">{tasks}</input></li>
                    </ul>
                </div>
            </article>
        })}
    </div>
}


export default Content;