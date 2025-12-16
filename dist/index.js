import _regeneratorRuntime from "babel-runtime/regenerator";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Button = function Button(_ref) {
    var handler = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setDisabled(true);
                            setStatus("Send");
                            fetch('https://jsonplaceholder.typicode.com/posts', {
                                method: "GET"
                            }).then(function (res) {
                                if (!res.ok) setDisabled(false);
                                return res.json();
                            }).then(function (data) {
                                console.log(data);
                                setPosts(data);
                            }).catch(function (err) {
                                console.error(err);
                                setStatus("Ошибка запроса");
                                setDisabled(false);
                            });

                        case 3:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function handler() {
            return _ref2.apply(this, arguments);
        };
    }();

    var setPosts = _ref.setPosts;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        disabled = _React$useState2[0],
        setDisabled = _React$useState2[1];

    var _React$useState3 = React.useState("Send"),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        status = _React$useState4[0],
        setStatus = _React$useState4[1];

    return React.createElement(
        "button",
        { onClick: handler, disabled: disabled },
        status
    );
};

var Post = function Post(props) {
    return React.createElement(
        "div",
        { className: "Task" },
        React.createElement(
            "p",
            { className: "Task__title" },
            props.title
        ),
        React.createElement(
            "p",
            { className: "Task__body" },
            props.body
        )
    );
};

var Posts = function Posts(_ref3) {
    var posts = _ref3.posts;

    return posts.length > 0 || Array.isArray(posts) ? posts.map(function (value, key) {
        return React.createElement(Post, { key: key, title: value.title, body: value.body });
    }) : "Постов нету";
};

var App = function App() {
    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        posts = _React$useState6[0],
        setPosts = _React$useState6[1];

    return React.createElement(
        "div",
        { className: "App", id: "gg" },
        React.createElement(
            "h1",
            { "class": "App__title" },
            "Hello world"
        ),
        React.createElement(
            "div",
            { className: "control" },
            React.createElement(Button, { setPosts: setPosts })
        ),
        React.createElement(
            "div",
            { className: "tasks" },
            React.createElement(Posts, { posts: posts })
        )
    );
};

// for dist
// export default App;

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null));