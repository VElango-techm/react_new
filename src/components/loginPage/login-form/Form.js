import React, { Component } from 'react';
import './form.css';
import { Form, Button } from 'react-bootstrap'
import data from '../../service/data.json';
import { Redirect } from "react-router-dom";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                userName: '',
                password: ''
            },
            formError: {
                userName: "",
                password: "",
            },
            authError: false,
            invalid: true,
            isAuthenticated: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res =>{
        //         console.log('res',res)
        //     })
        //     .catch(err =>{
        //         console.log('err', err)
        //     })
    }

    handleChange = e => {
        let form = this.state.form;
        form[e.target.name] = e.target.value
        this.setState({
            form
        });
        if (form.userName !== "" && form.password !== "") {
            this.setState({
                invalid: false
            })
        } else {
            // if (form.userName === "") {
            //     this.setState({
            //         formError: {
            //             userName: "Invalid User Name"
            //         }
            //     })
            // } else {
            //     this.setState({
            //         formError: {
            //             userName: ""
            //         }
            //     })
            // }

            // if(form.password ===""){
            //     this.setState({
            //         formError: {
            //             password: "Invalid password"
            //         }
            //     })
            // } else {
            //     this.setState({
            //         formError: {
            //             password: ""
            //         }
            //     })
            // }
            this.setState({
                invalid: true
            })
        }

    }

    loginHandler = e => {
        // const history = useHistory();
        e.preventDefault();
        let userExist = data.filter((item) => this.state.form.userName === item.username && this.state.form.password === item.password);
        if (userExist.length === 1) {
            debugger;
            this.setState({
                formError: {
                    userName: "",
                    password: ""
                },
                authError: true,
                isAuthenticated: true
            })
            //history.push("/dashboard");
        }
        else {
            this.setState({
                formError: {
                    userName: "Please enter valid user name",
                    password: "Please enter valid password"
                },
                authError: true,
            })
        }
    }

    render() {
        const { form, formError, invalid, authError, isAuthenticated } = this.state
        return (
            <div>
                {isAuthenticated &&
                    <Redirect to="/mobile" />
                }
                <Form className="form_box" onSubmit={this.loginHandler}>
                    {authError === true &&
                        <h3 className="text-white">Please enter valid credentials</h3>
                    }

                    <h2 className="text-white text-left mb-4">LOGIN</h2>
                    <Form.Group controlId="formBasicUser">
                        <Form.Control
                            type="text"
                            name="userName"
                            value={form.userName}
                            placeholder="User Name"
                            autoComplete="off"
                            className={formError.userName !== "" ? 'is-invalid' : ''}
                            onChange={this.handleChange} />

                        <Form.Text className="text-danger">
                            {formError.userName}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder="Password"
                            onChange={this.handleChange}
                            className={formError.password !== "" ? 'is-invalid' : ''} />

                        <Form.Text className="text-danger">
                            {formError.password}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <p className="text-white text-right mb-5">Forgot Password</p>
                    </Form.Group>
                    <Button variant="secondary" size="lg" className="mr-3">
                        Register
                    </Button>
                    <Button variant="primary" type="submit" size="lg" disabled={invalid}>
                        Submit
                    </Button>
                </Form>


            </div>
        )
    }

}
