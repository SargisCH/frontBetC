import React,{Component} from 'react';

class TableHeader extends Component{
		 render(){

		 const obj=this.props.headerdata;
		 let headers =[];
			 	for(let i in obj){
			  		headers.push(i);
				}
				headers = headers.slice(0,5)
				
			let header = headers.map((headers,index)=>
		  	<th key={index}>{headers}</th>);
		 	
			 return(
				  <thead>
					<tr >
						{header}
					</tr>
				</thead>
		 	);
		 }
	}
    export default TableHeader;