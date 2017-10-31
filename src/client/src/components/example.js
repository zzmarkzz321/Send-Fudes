import React, { Component } from 'react';
import { Button, Header, Image, Modal, Dropdown, Rating } from 'semantic-ui-react';

const languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' } ];

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

export class ExampleComponent extends Component {

    render() {
        return (
            <div>
                <h1> Modals </h1>
                <ModalExampleInfo/>

                <h1> Dropdown </h1>
                <DropdownExampleSearch/>
                <div>
                    <Rating maxRating={5} onRate={this.handleRate} />
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                </div>
            </div>
        );
    }
};

export const Example = ExampleComponent;