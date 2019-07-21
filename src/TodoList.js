import React, { Component, Fragment } from 'react';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        };
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input type="name"
                        value={this.state.inputValue}
                        onChange={this.handleChange.bind(this)}        
                    />
                    <button onClick = {this.handleBtnClick.bind(this)}>提交</button>
                </div>
                {/* 这是列表 */}
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li onClick={this.handleDeleteItem.bind(this, index)} key={index}>{item}</li>
                            );
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleBtnClick() {
        if (!this.state.inputValue) {
            return false;
        }
        this.setState({
            list: [...this.state.list, this.state.inputValue.replace(/^\s|\s&/g, '')],
            inputValue: '',
        })
    }

    handleDeleteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list,
        })
    }

}
export default TodoList
