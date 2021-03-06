import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        };

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use((request) => {
                this.setState({
                    error: null
                });
                return request;
            });

            this.resInterceptor = axios.interceptors.response.use((response) => {
                return response;
            }, (error) => {
                this.setState({error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            });
        };

        render() {
            return (
                <>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error &&
                        <>
                            <p>Whoops, Something didn't work as planned...</p>
                            <p>{this.state.error.message}</p>
                        </>
                        }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }

};

export default withErrorHandler;
