import React, { Component } from 'react';
import { Select } from 'antd';


const { Option } = Select;

class GetDet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
         }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch(
          "https://my-json-server.typicode.com/akilaliyanage/json-fake-api-server/equipmets"
        )
          .then((data) => data.json())
          .then((data) => this.setState({data:data}));
    }

    render() { 
        const dataArr = this.state.data;
        const loop = dataArr.map((itm) => {
            return <Option key={itm.id} value={itm.title}>{itm.title}</Option>;
        })
        return (
          <div>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
                >
                    {loop}
            </Select>
          </div>
        );
    }
}
 
export default GetDet;