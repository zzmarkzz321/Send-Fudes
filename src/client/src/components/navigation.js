import React, { Component } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

const MenuList = () => (
    <div>
        <Menu fixed='top' size='large'>
            <Container>
                <Menu.Item as='a' href='#' active>Home</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as='a' href='#'>Work</Menu.Item>
                    <Menu.Item as='a' href='#'>Company</Menu.Item>
                    <Menu.Item as='a' href='#'>Careers</Menu.Item>
                    <Menu.Item>
                        <Button as='a' href='#' primary>Login</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    </div>
);


export class NavigationComponent extends Component {

    render() {
        return (
            <MenuList/>
        );
    }
}

export const Navigation = NavigationComponent;