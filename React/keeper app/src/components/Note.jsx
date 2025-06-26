

export default function Note(props){
    return (
        <>
            <div className="note" key={props.key}>
                <h2 className="heading">{props.title}</h2>
                <p className="content">{props.content}</p>
            </div>
        </>
    )
}