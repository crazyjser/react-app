import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input type="name"
                        value={this.state.inputValue}
                        onChange={this.handleChange}        
                    />
                    <button onClick = {this.handleBtnClick}>提交</button>
                </div>
                {/* 这是列表 */}
                <ul>
                    {
                       this.getTodoItem() 
                    }
                </ul>
            </Fragment>
        );
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState(() => {
            return {
                inputValue: value
            }
        });
    }

    handleBtnClick() {
        if (!this.state.inputValue) {
            return false;
        }
        const { inputValue } = this.state;
        this.setState((prevState) => {
            return {
                list: [...prevState.list, inputValue.replace(/^\s|\s&/g, '')],
                inputValue: ''
            }
        });
    }

    getTodoItem () {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleDeleteItem}
                ></TodoItem>
            );
        })
    }

    handleDeleteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState(() => {
            return {
                list
            }
        });
    }

}
export default TodoList
