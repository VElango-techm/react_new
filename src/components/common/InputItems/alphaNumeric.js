import React from 'react'
import { Form } from 'react-bootstrap';

class AlphaNumeric extends React.Component {
  constructor() {
    super();
    this.state = {
      field: {
        alphanumeric: ''
      },
      errors: {}
    }
    this.splChar = this.splChar.bind(this);
  };


  splChar(e) {
    let field = this.state.field;
    field[e.target.name] = e.target.value;
    this.setState({
      field
    });
    let errors = {};
        if (typeof field["alphanumeric"] !== "undefined") {
            var pattern = /^[a-z0-9]+$/i;
            if (!pattern.test(field["alphanumeric"])) {
                errors["alphanumeric"] = "* No special Character allowed.";
            }
        }
    this.setState({
      errors: errors
    });

  }

  render() {
    return (
      <div className="row">
        <div className="col-4 mt-4 text-left">
          <Form>
            <Form.Group>
              <h5 className="mb-3">Alpha Numeric</h5>
              <Form.Control type="text" autoComplete="off" name="alphanumeric" placeholder="Enter Alphanumeric" value={this.state.field.alphanumeric} onChange={this.splChar} className={this.state.errors.alphanumeric ? 'is-invalid' : ''} />
              <Form.Text className="text-danger">
                {this.state.errors.alphanumeric}
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }


}



export default AlphaNumeric
