export default function PostEdit (props) {
    const onSubmit = e => {
        props.editMode(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="text" id="title"/>
            <input type="text" id="author"/>
            <textarea id="content"/>
            <input type="submit"/>
        </form>
    );

}