import * as React from "react";
import * as Api from "./Api";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0:
  left: 0;
  height: 300px;
  overflow-y: scroll; 
  overflow-x: hidden; 
  width: 300px;
  background: #fff;
  margin-top:30px;
`;

const Item = styled.div`
  cursor: pointer;
  padding: 5px;
  font-size: 0.8rem;
  :hover {
    background: #eceded;
  }
`;

type Props = {
  query: string;
  visible: boolean;
  onSelect: (result) => void;
};

type State = {
  results: any[];
  visible: boolean;
};

class Suggest extends React.Component<Props, State> {
  state = {
    results: [],
    visible: false,
  };

  ref = React.createRef<HTMLDivElement>();

  UNSAFE_componentWillReceiveProps(newProps) {
    if (!newProps.visible || newProps.query.length < 3) {
      return null;
    }
    this.setState({ visible: true });
    Api.fetchFoodByName(newProps.query).then(results => this.setState({ results }));
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (event: any) => {
    if (this.ref.current!.contains(event.target)) {
      return;
    }
    this.close();
  };

  close() {
    this.setState({ visible: false });
  }

  onSelect = result => {
    this.props.onSelect(result);
    this.close();
  };

  render() {
    return (
      this.state.visible && (
        <Container ref={this.ref}>
          {this.state.results.map((result, index) => (
            <Item key={index} onClick={() => this.onSelect(result)}>
              {result.name.fi}
            </Item>
          ))}
        </Container>
      )
    );
  }
}

export default Suggest;
