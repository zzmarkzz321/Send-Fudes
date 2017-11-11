import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Modal, Dropdown, Rating, Message, Segment, Reveal, Step } from 'semantic-ui-react';

const languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' } ];

/**
 * Modal Component
 */
const ModalExampleInfo = () => (
    <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
        </Modal.Content>
    </Modal>
);

/**
 * Dropdown component
 */
const DropdownExampleSearch = () => (
    <Dropdown
        button
        className='icon'
        floating
        labeled
        icon='world'
        options={languageOptions}
        search
        text='Select Language'
    />
);

/**
 * Login Form Component
 */
const LoginForm = () => (
    <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style> {`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `} </style>
        <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='teal' fluid size='large'>Login</Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
);

/**
 * Image Reveal Component
 */
const RevealExampleMove = () => (
    <Reveal animated='move'>
        <Reveal.Content visible>
            {/*<Image src='/assets/images/wireframe/square-image.png' size='small' />*/}
        </Reveal.Content>
        <Reveal.Content hidden>
            {/*<Image src='/assets/images/avatar/large/chris.jpg' size='small' />*/}
        </Reveal.Content>
    </Reveal>
);

/**
 * Step Component
 */
const StepExampleOrdered = () => (
    <Step.Group ordered>
        <Step completed>
            <Step.Content>
                <Step.Title>Shipping</Step.Title>
                <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
        </Step>

        <Step completed>
            <Step.Content>
                <Step.Title>Billing</Step.Title>
                <Step.Description>Enter billing information</Step.Description>
            </Step.Content>
        </Step>

        <Step active>
            <Step.Content>
                <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
        </Step>
    </Step.Group>
);

/**
 * Main Component
 */
export class ExampleComponent extends Component {

    render() {
        return (
            <div>
                <h1> Modals </h1>
                <ModalExampleInfo/>

                <h1> Dropdown </h1>
                <DropdownExampleSearch/>

                <h1> Login </h1>
                <LoginForm/>

                <h1> Image Reveal </h1>
                <RevealExampleMove/>

                <h1> Step </h1>
                <StepExampleOrdered/>

                <div>
                    <Rating maxRating={5} onRate={this.handleRate} />
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                </div>
            </div>
        );
    }
};

export const Example = ExampleComponent;