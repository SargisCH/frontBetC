import React, { Component } from 'react';
import TableHeader from'./TableHeader.js';
import TableRow from './TableRow.js';
//import AddRowTable from './AddRowTable.js';
import '../StyleSheet/Table.css';
//import array from '../array.js';
import Ajax from '../Ajax.js';

class Table extends Component{
			constructor(props){
				super(props);
				this.state = {data:[]}
				//this.updateTable=this.updateTable.bind(this);
			}
			componentWillMount(){
				let that = this;
				Ajax.getData('http://crmbetc.azurewebsites.net/api/contacts').then(response => this.setState({data: response}));
			}
			render(){
				return (<div className="UserTable">
								<div id="theader">User Info List</div>
								<div id="scroll">
									<table className="table">
										<TableHeader headerdata={this.state.data[0]} className="tableheader"/>
										<TableRow update={this.updateTable} dataArray={this.state.data}/>
									</table>
								</div>
						</div>
								// {<AddRowTable  update={this.updateTable} Id={this.state.data.length + 1} className="addrowtable"/>
								// </div>}
						)
					}
				}
    export default Table;
		     	