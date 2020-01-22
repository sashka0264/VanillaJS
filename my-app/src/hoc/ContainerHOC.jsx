import React from 'react';

const ContainerHOC = (Component) => {
  class WithContainer extends Component {
    render() {
      return <Component {...this.props}/>;
    }
  }
  return WithContainer;
};


export default ContainerHOC;
