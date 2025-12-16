const Button = ({ setPosts }) => {
    const [disabled, setDisabled] = React.useState(false)
    const [status, setStatus] = React.useState("Send")

    async function handler() {
        setDisabled(true)
        setStatus("Send")
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "GET",
        }).then(res => {
            if (!res.ok) setDisabled(false);
            return res.json()
        }).then(data => {
            console.log(data)
            setPosts(data)
        }).catch(err => {
            console.error(err)
            setStatus("Ошибка запроса")
            setDisabled(false)
        })
    }

    return (
        <button onClick={handler} disabled={disabled}>{status}</button>
    )
}

const Post = (props) => {
    return (
        <div className="Task">
            <p className="Task__title">{props.title}</p>
            <p className="Task__body">{props.body}</p>
        </div>
    )
}

const Posts = ({ posts }) => {
    return posts.length > 0 || Array.isArray(posts) ? posts.map((value, key) => 
        <Post key={key} title={value.title} body={value.body}/>
    ) : "Постов нету" 
}

const App = () => {
    const [posts, setPosts] = React.useState([])

    return (
        <div className="App" id="gg">
            <h1 class="App__title">Hello world</h1>
            <div className="control">
                <Button setPosts={setPosts}/>
            </div>

            <div className="tasks">
                <Posts posts={posts}/>
            </div>
        </div>
    )
}

// for dist
// export default App;