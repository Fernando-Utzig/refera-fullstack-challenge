class NewOrderModal extends Component {
    state = {
      modal: false
    };
  
    toggle = () => {
      this.setState(previous => ({
        modal: !previous.modal
      }));
    };
  
    render() {
      const create = this.props.create;
  
      var title = "Editing Order";
      var button = <Button onClick={this.toggle}>Edit</Button>;
      if (create) {
        title = "Creating New Order";
  
        button = (
          <Button
            color="primary"
            className="float-right"
            onClick={this.toggle}
            style={{ minWidth: "200px" }}
          >
            Create New
          </Button>
        );
      }
  
      return (
        <Fragment>
          {button}
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
  
            <ModalBody>
              <NewOrderorm
                resetState={this.props.resetState}
                toggle={this.toggle}
                order={this.props.order}
              />
            </ModalBody>
          </Modal>
        </Fragment>
      );
    }
  }
  
  export default NewOrderModal;